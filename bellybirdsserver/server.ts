import express from "express";
import bodyParser from  "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import User from "./models/user";

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/bellybirds");


if(process.env.NODE_ENV !== "production") {
    app.use(cors())
}

app.use(bodyParser.json());

app.get("/", (req,res) => {
    res.send("ok");
})

app.post("/api/register", async (req,res) => {
    console.log("request received for register RequestBody:", req.body);

    const {email, password} = req.body;

    if(!email || !password) {
        return res.json({ status: "error", error: "Invalid email password"});
    }

    //ToDo: Hashing the password

    try {
        const user = new User({email, password})
        await user.save();
        console.log("Im here"); 
        
    } catch (e) {
        console.log("Error occured while User registration",  e);
        res.json({status: "error", error: "Duplicate Email"});
    }
    
    res.json({status: "ok"})
})

app.listen(1337);