"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const UserModel = new mongoose.Schema({
    uname: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, {
    collection: "users"
});
const User = mongoose.model("UserModel", UserModel);
exports.default = User;
