import { Response } from "express";
import { userIdRequestType } from "../Types/RequestTypes";
import { UserModel } from "../models/userModel";
import Account from "../models/accountModel";

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

export { getBalance };
