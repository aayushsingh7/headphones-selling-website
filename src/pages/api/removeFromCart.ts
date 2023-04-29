import clientPromise from "@/database/db";
import { ObjectId } from "mongodb";
import { NextApiResponse, NextApiRequest } from "next";

const removeFromCart = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
    
      let mongoClient = await clientPromise;
  
      const { userId, itemId } = req.body;

      console.log({userId:userId , itemId:itemId})

      if(!userId || !itemId)return res.status(400).send({success:false , message:"Information Not Provided" , userId:userId, itemId:itemId})
  
      let removeProduct = await mongoClient
      .db()
      .collection("user")
      .updateOne(
        { _id: new ObjectId(userId) },
        { $pull:{cart:{_id:itemId}} }
      );
    
      console.log(removeProduct)
  
      if (removeProduct.modifiedCount === 1) {
        res.status(200).send({ success: true, message: "Item removed from cart" });
      } else {
        res.status(400).send({
          success: false,
          message: "Something went wrong while removing item from cart",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ success: false, message: "Interval server error" });
    }
};

export default removeFromCart;
