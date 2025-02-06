const mongoose = require("mongoose")
const Uri = "mongodb://localhost:27017/StackOverflow?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectToMongo = async()=>{
    try {
        await mongoose.connect(Uri)
        console.log("Connected to Mongo Successfully");
    
    } catch (error) {
        console.log(error);
        process.exit();
        
    }
 }

 module.exports = connectToMongo;

