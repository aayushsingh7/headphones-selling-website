import clientPromise from "@/database/db";
import { NextApiResponse, NextApiRequest } from "next";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
import cookie from 'cookie';

const checkUserLoggedIn = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const mongoClient = await clientPromise;
    const token = req.cookies.jwt as string;
    // const cookies = cookie.parse(req.headers.cookie || '');
    // const path = cookies.path;
    // console.log("Cookies Path Is: ",path)

    console.log({
        Token: token,
        SECRET: process.env.SECRET_KEY
      });

    if (!token) {
      return res
        .status(401)
        .send({ success: false, message: "No Authorised Token Provided" });
    }

    if(token === "eyJhbGciOiJIUzI1NiJ9.NjQ0NGMzMTFmZjAzY2EzYjNjNWUwYmU3.D9byB1K9b9c1PGTVm76lDLu96iqTHTjAHLqlVya1wfo"){
      console.log("Both Token Matched")
    }

    const isValidToken = await jwt.verify(token,process.env.SECRET_KEY) as string

    console.log(isValidToken)

    if (!isValidToken) {
      return res.status(401).json("Invalid Token");
    }

    console.log({
      Token: token,
      SECRET: process.env.SECRET_KEY,
      userId: isValidToken,
    });

    console.log("isValidToken",isValidToken.toString())

    const getUser:any = await mongoClient
      .db()
      .collection("user")
      .findOne({ _id: new ObjectId(`${isValidToken}`) });

      delete getUser.password;

    res
      .status(200)
      .send({ success: true, message: "User Logged In", user: getUser });
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, message: "Internal server error", errorMessage:err });
  }
};

export default checkUserLoggedIn;
