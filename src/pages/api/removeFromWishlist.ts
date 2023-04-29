import clientPromise from "@/database/db";
import { ObjectId } from "mongodb";
import { NextApiResponse, NextApiRequest } from "next";


const removeFromWishlist = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    
    let mongoClient = await clientPromise;

    const { userId, itemId } = req.body;

    if(!userId || !itemId)return res.status(400).send({success:false , message:"Information Not Provided"})

    let addProduct = await mongoClient
      .db()
      .collection("user")
      .updateOne({ _id: new ObjectId(userId) }, { $push: { "wishlist._id":new ObjectId(itemId) } });

    if (addProduct.modifiedCount === 1) {
      res.status(200).send({ success: true, message: "Item removed from wishlist" });
    } else {
      res.status(400).send({
        success: false,
        message: "Something went wrong while removing item from wishlist",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, message: "Interval server error" });
  }
};

export default removeFromWishlist;
