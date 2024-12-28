//type=module
// const express=require("express");
// const dotenv=require("dotenv");


import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";

const app=express();
//middleware to coonect frontend
app.use(cors());
app.use(express.json())

//defining router
app.use("/book",bookRoute)
app.use("/users",userRoute)




dotenv.config();
const PORT=process.env.PORT||5000; //port
const URI=process.env.MONGO_URI //mongo db connection url

//connect to mongoDB
try{
    mongoose.connect(URI,{
         useNewUrlParser:true,
         useUnifiedTopology:true
    });
    console.log("Connected to mongoDB")
}
catch(error){
   console.log("Error", error)
}



app.get("/",(req,res)=>{
    res.send("this is my home page")
})

app.listen(PORT,()=>{
    console.log(`listening on port  ${PORT}`)
})