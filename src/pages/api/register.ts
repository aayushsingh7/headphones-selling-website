import clientPromise from "@/database/db";
import { NextApiRequest, NextApiResponse } from "next";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const { email, password, name } = req.body;

  try {
    let mongoClient = await clientPromise;

    if (!email || !password || !name) {
      return res
        .status(400)
        .send({ success: false, message: "Please Provided Valid Information" });
    }

    let isUserExists = await mongoClient
      .db()
      .collection("user")
      .findOne({ email: email });

    if (isUserExists?._id) {
      return res
        .status(400)
        .send({ success: false, message: "User already exists" });
    }

    const bcryptPassword = await bcryptjs.hash(password, 12);

    const newUser = await mongoClient.db().collection("user").insertOne({
      name: name,
      email: email,
      password: bcryptPassword,
    });
    
    if (newUser.acknowledged) {
      
      const maxAge = 20 * 24 * 60 * 60; // 20 days in seconds

      let token = await jwt.sign(
          newUser.insertedId.toString(),
          process.env.SECRET_KEY       
      );


      res.setHeader(
        "Set-Cookie",
        `jwt=${token}; HttpOnly;Path=/; Max-Age=${maxAge}; SameSite=Strict; Secure`
      );

      res.status(200).send({
        success: true,
        message: "User registered successfully",
        userId: newUser.insertedId.toString(),
      });
    } else {
      res.status(500).send({
        success: false,
        message:
          "Something went wrong while registering the user, please try again later",
      });
    }
  } catch (err) {
    console.log(err)
    res.status(500).send({ success: false, message: err });
  }
};

export default register;
