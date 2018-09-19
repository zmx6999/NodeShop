const mongoose=require("mongoose")
module.exports=mongoose.model("product",new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:[true,"name cannot be empty"]
    },
    price:{
        type:Number,
        required:[true,"price cannot be empty"]
    },
    stock:{
        type:Number,
        default:0
    },
    created:{
        type:Date
    },
    category_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true,"category can not be empty"]
    }
}))
