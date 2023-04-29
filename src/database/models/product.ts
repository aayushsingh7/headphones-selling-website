import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    title:{type:String,required:true},
    discount:{type:Number,required:true},
    finalPrice:{type:Number,required:true},
    originalPrice:{type:Number,required:true},
    image:{type:String,required:true},
    discription:{type:String,required:true},
    quantity:{type:Number , default:1},
    inStockQuantity:{type:Number,required:true,default:10},
    orderStatus:{type:String,default:"Dispatching"}
})

const Product = mongoose.model('product',productSchema)

export default Product;