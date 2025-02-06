const express = require("express");
const router = express.Router();
const {getAllQuestions,getQuestionById,createQuestion,updateQuestion,deleteQuestion} = require("../Controllers/questionController")
const fetchuser = require("../middleware/fetchuser")


router.get("/",getAllQuestions)
router.post("/createQuestion",fetchuser,createQuestion)


module.exports = router;