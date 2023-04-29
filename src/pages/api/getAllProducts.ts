import clientPromise from '@/database/db';
import {NextApiResponse , NextApiRequest} from 'next'

const getAllProducts = async(req:NextApiRequest , res:NextApiResponse)=> {
    try{
      let mongoClient = await clientPromise;
      let getData = await mongoClient.db().collection('product').find({}).toArray()
      if(getData.length > 0 ) {
       res.status(200).send({success:true , message:"Data fetched successfully" , data:getData})
      }else{
        res.status(400).send({success:false , message:"Something went wrong which fetching the data"})
      }
    } catch(err){
    res.status(500).send({success:false , message:err})
    }
}

export default getAllProducts;