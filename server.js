require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./User");
// const PORT = 5000;
const PORT = process.env.PORT;
const database= process.env.MONGODB_URI;
mongoose.connect(database).then(()=>{
console.log("Connected to MongoDB ");
}).catch(err=>{
    console.error("error connection to database",err);
});
app.use(express.json());
app.use('/api/users',userRoute);
// app.get("/", (req, res) => {
//     console.log("hello data");
// });
// Routes



app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
})