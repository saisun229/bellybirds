"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const user_1 = require("./models/user");
const jwt = require("jsonwebtoken");
const websocket_1 = require("./websocket");
const app = express();
const JSON_SECRET_TOKEN = "sjhbvkab6987sDvbbf9969870^$&^%&^(*&()&($7fsbfb796795759jbmblknvlfv78i689689sd6vsdv";
mongoose.connect("mongodb://127.0.0.1:27017/bellybirds");
if (process.env.NODE_ENV !== "production") {
    app.use(cors());
}
app.use(bodyParser.json());
app.get("/", (req, res) => {
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
        return res.json({ status: "error", error: "Invalid email password" });
    }
    const user = await user_1.default.findOne({ email, password }).lean();
    if (!user) {
        return res.json({ status: "error", error: "User not found" });
        console.log("Error occured while fetching user");
    }
    //TODO: Best practices
    // 1. Refresh tokens XX
    // 2. Storing JWT in memory of localStorage xx
    //Right now:
    //1. JWT tokens directly
    //2. localStorage
    const payload = jwt.sign({ email }, JSON_SECRET_TOKEN);
    if (user) {
        return res.json({ status: "ok", data: payload });
        console.log(user, "fetched user");
    }
});
app.post("/api/register", async (req, res) => {
    console.log("request received for register RequestBody:", req.body);
    const { email, password } = req.body;
    if (!email || !password) {
        return res.json({ status: "error", error: "Invalid email password" });
    }
    //ToDo: Hashing the password bcrypt
    try {
        console.log("Im here 1");
        const user = new user_1.default({ email, password });
        console.log("Im here 2", user);
        await user.save();
        console.log("Im here 3");
    }
    catch (e) {
        console.log("Error occured while User registration", e);
        res.json({ status: "error", error: "Duplicate Email" });
    }
    res.json({ status: "ok" });
});
app.listen(1337);
websocket_1.default();
