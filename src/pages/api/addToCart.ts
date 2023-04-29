import clientPromise from "@/database/db";
import { ObjectId } from "mongodb";
import { NextApiResponse, NextApiRequest } from "next";

const addToCart = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    
    let mongoClient = await clientPromise;

    const { userId, data } = req.body;

    if(!userId || !data)return res.status(400).send({success:false , message:"Information Not Provided"})

    let addProduct = await mongoClient
      .db()
      .collection("user")
      .updateOne({ _id: new ObjectId(userId) }, { $push: { cart: data } });

    if (addProduct.modifiedCount === 1) {
      res.status(200).send({ success: true, message: "Item added to cart" });
    } else {
      res.status(400).send({
        success: false,
        message: "Something went wrong while adding item to cart",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, message: "Interval server error" });
  }
};

export default addToCart;
