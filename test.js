const express = require('express');

const router = express.Router();




router.post("/", async(req, res)=>{
    try{
        res.json("hello this is test file")

    }catch(error){
        console.error("Error user:",error);
        res.status(500).json({error: "internal server error"});
    }
});


module.exports = router;
