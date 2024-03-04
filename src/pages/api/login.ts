import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../database/db";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

interface LoginApiResponse extends NextApiResponse {
  success:boolean,
  message:string
}

export default async function login(req: NextApiRequest , res: LoginApiResponse) {

  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  try {
    const mongoClient = await clientPromise;
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .send({ success: false, message: "Information not provided" });
    }
    let isUserExists = await mongoClient
      .db()
      .collection("user")
      .findOne({ email: email });

    if (isUserExists?._id) {
      let verifyPassword = await bcryptjs.compare(
        password,
        isUserExists.password
      );
      if (verifyPassword) {
        const maxAge = 20 * 24 * 60 * 60; // 20 days in seconds
        let token = await jwt.sign(isUserExists._id.toString(), process.env.SECRET_KEY);
        res.setHeader(
          "Set-Cookie",
          `jwt=${token}; HttpOnly;Path=/; Max-Age=${maxAge}; SameSite=Strict; Secure`
        );
        res.status(200).send({ success: true, message: "Login Successfully" });
      } else {
        res
          .status(401)
          .send({ success: false, message: "Invalid Cradentails" });
      }
    } else {
      res.status(404).send({ success: false, message: "User not exists" });
    }
  } catch (err) {
    res.status(500).send({ success: false, message: err });
  }
}
