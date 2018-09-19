const mongoose=require("mongoose")
module.exports=mongoose.model("order",new mongoose.Schema({
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true,"product can not be empty"]
    },
    count:{
        type:Number,
        min:[1,"count must be above 0"],
        required:[true,"count can not be empty"]
    },
    total_price:Number,
    created:Date
}))
