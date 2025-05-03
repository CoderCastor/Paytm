import { Response } from "express";
import { userIdRequestType } from "../Types/RequestTypes";
import { UserModel } from "../models/userModel";
import Account from "../models/accountModel";
import { transferBodyTypes } from "../Types/TransferBodyTypes";
import mongoose from "mongoose";

const getBalance = async (req: userIdRequestType, res: Response) => {
    const userId = req.userId;

    const user = await UserModel.findOne({
        _id: userId,
    });

    if (!user) {
        res.status(404).json({
            message: "User Not found",
        });
        return;
    }

    const account = await Account.findOne({
        userId: userId,
    });

    res.status(200).json({
        balance: account?.balance,
    });
};

const transferAmount = async (req: userIdRequestType, res: Response) => {
    const userId = req.userId;

    const { to, amount } = req.body as transferBodyTypes;

    try {
        const session = await mongoose.startSession();

        session.startTransaction();

        const account = await Account.findOne({ userId: req.userId }).session(
            session
        );

        if (!account || account.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Insufficient balance",
            });
        }

        const toAccount = await Account.findOne({ userId: to }).session(
            session
        );

        if (!toAccount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Invalid account",
            });
        }

        // Perform the transfer
        await Account.updateOne(
            { userId: req.userId },
            { $inc: { balance: -amount } }
        ).session(session);
        await Account.updateOne(
            { userId: to },
            { $inc: { balance: amount } }
        ).session(session);

        // Commit the transaction
        await session.commitTransaction();
        res.json({
            message: "Transfer successful",
        });
    } catch (error) {
        res.json({
            error: "failed to transfer money",
            err : error
        });
    }
};

export { getBalance, transferAmount };
