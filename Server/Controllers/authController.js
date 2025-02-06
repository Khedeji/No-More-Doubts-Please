const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "VikasKhede";

const authController = {

    CreateUser : async (req,res) =>{
        try{
            const { password,email,name } = req.body
            let user = await User.findOne({email})
            if(user){
                return res.status(400).json({error:"User already exists"})
            }
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(password, salt);
            user = await User.create({
                name: name,
                email: email,
                password: secPass,
            }) 
            const data = {
                user: {
                    id: user.id,
                },
            };
            const authToken = jwt.sign(data, JWT_SECRET);
            res.json({ Success:true, authToken });

        }
        catch(error){
            console.log(error);
            res.status(500).send("Internal Server Error");
        }
        

    },
    LoginUser : async (req, res) =>{
        try{
            const { password,email } = req.body
            let user = await User.findOne({email})
            if(!user){
                return res.status(400).json({error:"User does not exists"})
            }
            const passwordCompare = await bcrypt.compare(password, user.password);
            if(!passwordCompare){
                return res.status(400).json({error:"Password does not match"})
            }
            const data = {
                user: {
                    id: user.id,
                },
            };
            const authToken = jwt.sign(data, JWT_SECRET);
            res.json({ Success:true, authToken });

        }
        catch(error){
            console.log(error);
            res.status(500).send("Internal Server Error");
        }
    }
}

module.exports = authController;
