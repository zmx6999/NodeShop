const mongoose=require("mongoose")
module.exports=mongoose.model("user",new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:[true,"username can not be empty"]
    },
    password:{
        type:String,
        required:[true,"password can not be empty"]
    },
    usertype:{
        type:Number,
        default:0
    },
    created:Date
}))
