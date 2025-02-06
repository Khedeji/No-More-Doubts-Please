const express = require("express");
const router = express.Router();
const {getAnswers,createAnswers} = require("../Controllers/ansController")


router.post("/",createAnswers)

module.exports = router;