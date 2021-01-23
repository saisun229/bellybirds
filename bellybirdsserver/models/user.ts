import { Mongoose } from "mongoose"

import * as mongoose from "mongoose";

const UserModel = new mongoose.Schema(
    {
    email:  { type: String, required: true, unique: true},
    password: {type: String, required: true},
    }, {
    collection: "users"
    });

const User = mongoose.model("UserModel", UserModel);

export default User;