const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  title:{
    type:String,
    required:true
  },
  body:{
    type:String,
    required:true
  },
  tags:{
    type:[String],
    default : "General"
  },
  user:{
    type:Schema.Types.ObjectId,
    ref:"User",
    required:true
  },
  Date:{
    type:Date,
    default:Date.now
  }
});
const Question = mongoose.model("Question", questionSchema);
module.exports = Question;