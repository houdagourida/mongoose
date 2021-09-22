const mongoose=require("mongoose")
const connectdb=async()=>{
    try {
       await mongoose.connect(process.env.mongo_URI)
    console.log("db connected")
    } catch (error) {
        console.log(error)
    }
}
module.exports=connectdb