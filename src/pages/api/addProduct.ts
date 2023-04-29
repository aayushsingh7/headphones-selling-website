import clientPromise from "@/database/db";
import { NextApiResponse, NextApiRequest } from "next";

const addProduct = async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        originalPrice,
        discount,
        finalPrice,
        image,
        discription,
        title,
        inStockQuantity,
    } = req.body;
    try {
        if (
            originalPrice &&
            discount &&
            finalPrice &&
            image &&
            discription &&
            title &&
            inStockQuantity
        ) {
            let mongoClient = await clientPromise;
            let newproduct = await mongoClient.db().collection("product").insertOne({
                title: title,
                originalPrice: originalPrice,
                discount: discount,
                finalPrice: finalPrice,
                image: image,
                discription: discription,
                inStockQuantity: inStockQuantity,
            });

            if (newproduct.acknowledged) {
                res
                    .status(200)
                    .send({ success: true, message: "Product added successfully" });
            } else {
                res.status(400).send({
                    success: false,
                    message:
                        "Something went wrong while adding the product to the database",
                });
            }
        } else {
            return res
                .status(400)
                .send({ success: false, message: "Information not provided" });
        }
    } catch (err) {
        res.status(500).send({ success: false, message: err });
    }
};

export default addProduct;
