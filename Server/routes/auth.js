const express = require("express");
const router = express.Router();
const validate = require("../middleware/validation");
const {CreateUser,LoginUser} = require("../Controllers/authController")
 

router.post("/register",validate, CreateUser )
router.post("/login", validate, LoginUser)


module.exports = router;