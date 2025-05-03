import mongoose from "mongoose";

export const AccountModelSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    balance : {
        type : Number,
        required : true
    }
})

const Account = mongoose.model("Account",AccountModelSchema)

export default Account;