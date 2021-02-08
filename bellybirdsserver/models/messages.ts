import { Mongoose } from "mongoose"

import * as mongoose from "mongoose";

const MessageModel = new mongoose.Schema(
    {
        email:  { type: String, required: true},
        uname:  { type: String, required: true},
        message: {type: String, required: true},
        date: {type: Number, required: true}
    }, 
    {
        collection: "messages"
    });

const Message = mongoose.model("MessageModel", MessageModel);

export default Message;