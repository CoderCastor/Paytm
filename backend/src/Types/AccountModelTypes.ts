import mongoose from "mongoose"

export type Account = {
    userId : mongoose.Schema.Types.ObjectId,
    balance : number
}