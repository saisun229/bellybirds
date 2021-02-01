"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const MessageModel = new mongoose.Schema({
    email: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Number, required: true }
}, {
    collection: "messages"
});
const Message = mongoose.model("MessageModel", MessageModel);
exports.default = Message;
