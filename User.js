const express = require('express');
const User = require("./UserMongo");
const router = express.Router();

router.post("/", async(req, res)=>{
    try{
        const {name , email } =req.body;
        const user = new User({name, email});
        await user.save();
        res.status(201).json(user);

    }catch(error){
        console.error("Error user:",error);
        res.status(500).json({error: "internal server error"});
    }
});

router.get('/', async(req, res)=>{
    try{
        const users = await User.find();
        res.json(users);
    } catch(error){
        console.error("error getting users")
        res.status(500).json({error:"internal server error"})
    }
})

module.exports = router;