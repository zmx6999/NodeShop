const mongoose=require("mongoose")
module.exports=mongoose.model("category",new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name can not be empty"],
        unique:true
    },
    created:{
        type:Date,
        default:Date.now()
    }
}))
