const mongoose=require("mongoose")
const config=require("./config")
mongoose.connect(`mongodb://127.0.0.1/${config.DB}`)
