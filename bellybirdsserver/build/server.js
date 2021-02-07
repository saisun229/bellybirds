"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const user_1 = require("./models/user");
const jwt = require("jsonwebtoken");
const websocket_1 = require("./websocket");
const utilities_1 = require("./utilities");
const PRODUCTION = process.env.NODE_ENV === "production";
const app = express();
// if(PRODUCTION) {
//     app.use("/", express.static('/home/ubuntu/webapp/bellybirdsclient/build'));
// }
mongoose.connect("mongodb://127.0.0.1:27017/bellybirds");
// if(!PRODUCTION) {
app.use(cors());
// }
app.use(bodyParser.json());
app.get("/test", (req, res) => {
    res.send("ok");
});
//TODO:
app.get("/refresh", () => {
    // Store Refresh Token inside  ---> http only cookie
});
app.post("/api/login", async (req, res) => {
    console.log("request received for register RequestBody:", req.body);
    const { email, password } = req.body;
    if (!email || !password) {
        return res.json({ status: "error", message: "Invalid email password combination" });
    }
    const user = await user_1.default.findOne({ email, password }).lean();
    if (!user) {
        return res.json({ status: "error", message: "User not found" });
    }
    //TODO: Best practices
    // 1. Refresh tokens XX
    // 2. Storing JWT in memory of localStorage xx
    //Right now:
    //1. JWT tokens directly
    //2. localStorage
    const username = user.uname;
    const payload = jwt.sign({ email, username }, utilities_1.JSON_SECRET_TOKEN);
    if (user) {
        console.log("username....", user);
        return res.json({ status: "success", message: "Login Succesful!", token: payload });
    }
});
app.post("/api/register", async (req, res) => {
    console.log("request received for register RequestBody:", req.body);
    const { uname, email, password } = req.body;
    if (!email || !password || !uname) {
        return res.json({ status: "error", message: "Invalid email password" });
    }
    //ToDo: Hashing the password bcrypt
    try {
        console.log("Im here 1");
        const user = new user_1.default({ uname, email, password });
        console.log("Im here 2", user);
        await user.save();
        console.log("Im here 3");
    }
    catch (e) {
        console.log("Error occured while User registration", e);
        return res.json({ status: "error", message: "Duplicate Email or User Name" });
    }
    return res.json({ status: "success", message: "Your registration is Successful!" });
});
app.listen(1337);
websocket_1.default();
