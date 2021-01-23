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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const app = express_1.default();
const JSON_SECRET_TOKEN = "sjhbvkab6987sDvbbf9969870^$&^%&^(*&()&($7fsbfb796795759jbmblknvlfv78i689689sd6vsdv";
mongoose_1.default.connect("mongodb://127.0.0.1:27017/bellybirds");
if (process.env.NODE_ENV !== "production") {
    app.use(cors_1.default());
}
app.use(body_parser_1.default.json());
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
    const payload = jsonwebtoken_1.default.sign({ email }, JSON_SECRET_TOKEN);
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
