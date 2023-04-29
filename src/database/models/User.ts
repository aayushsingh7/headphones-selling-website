import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String,
  orders:{type:[Object] , default:[]},
  wishlist:{type:[Object] , default:[]},
  cart:{type:[Object] , default:[]}
})

const User = mongoose.model('users',userSchema)

export default User;