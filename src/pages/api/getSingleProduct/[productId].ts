import { ObjectId } from 'mongodb';
import clientPromise from "@/database/db";
import { NextApiRequest, NextApiResponse } from "next";

const getSingelUser = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { productId } = req.query;
    const mongoClinet = await clientPromise;
    const id = new ObjectId(productId as string); // Convert the string to ObjectId
    let getProduct = await mongoClinet
      .db()
      .collection("product")
      .findOne({ _id: id }); // Use the ObjectId in the query
      
    if (getProduct) {
      res.status(200).send({ success: true, message: "Data fetching successful", data: getProduct });
    } else {
      res.status(404).send({ success: false, message: "No product found",productId:productId });
    }
  } catch (err) {
    res.status(500).send({ success: false, message: err });
  }
};

export default getSingelUser;
