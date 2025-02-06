const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AnsSchema = new Schema({
    answer:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"question"
    },
    date:{
        type:Date,
        default:Date.now
    }
})
const Answer = mongoose.model("answer",AnsSchema);
module.exports = Answer;