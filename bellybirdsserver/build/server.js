"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./models/user"));
const app = express_1.default();
mongoose_1.default.connect("mongodb://127.0.0.1:27017/bellybirds");
if (process.env.NODE_ENV !== "production") {
    app.use(cors_1.default());
}
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    res.send("ok");
});
app.post("/api/register", async (req, res) => {
    console.log("request received for register RequestBody:", req.body);
    const { email, password } = req.body;
    if (!email || !password) {
        return res.json({ status: "error", error: "Invalid email password" });
    }
    //ToDo: Hashing the password
    try {
        const user = new user_1.default({ email, password });
        await user.save();
        console.log("Im here");
    }
    catch (e) {
        console.log("Error occured while User registration", e);
        res.json({ status: "error", error: "Duplicate Email" });
    }
    res.json({ status: "ok" });
});
app.listen(1337);
