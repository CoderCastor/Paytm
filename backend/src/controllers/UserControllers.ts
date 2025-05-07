import { Request, Response } from "express";
import { UserModelTypes } from "../Types/UserModelTypes";
import { UserModel } from "../models/userModel";
import { hashPassword, verifyPassword } from "../utils/PasswordHashing";
import { generateJWT } from "../utils/JWT";
import zod from "zod";
import { userIdRequestType } from "../Types/RequestTypes";
import Account from "../models/accountModel";

const userSignupSchema = zod.object({
    firstName: zod.string().min(3),
    lastName: zod.string().min(3),
    email: zod.string(),
    username: zod.string(),
    password: zod.string(),
});

const updateBodySchema = zod.object({
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
    password: zod.string().optional(),
});

const signupUser = async (req: Request, res: Response) => {
    const { firstName, lastName, email, username, password } =
        req.body as UserModelTypes;
    const { success, error } = userSignupSchema.safeParse(req.body);

    if (!success) {
        res.json({
            message: "Incorrect Input",
            error: error.issues.map(
                (error) => error.path[0] + " " + error.message
            ),
        });
        return;
    }

    try {
        const isUserExist = await UserModel.findOne({
            $or: [{ username }, { email }],
        });
        if (isUserExist) {
            res.status(409).json({
                message: "User already exist with this email. Please Signin",
            });
            return;
        } else {
            //password hashing
            const hashedPassword = hashPassword(password);

            const user = await UserModel.insertOne({
                firstName,
                lastName,
                username,
                email,
                password: hashedPassword,
            });

            const id = user._id;

            const userWithAccount = await Account.create({
                userId:id,
                balance : Math.round((1 + Math.random() * 10000))
            })

            res.status(201).json({
                message: "User registered and account created.",
                balance : userWithAccount.balance,
                token: generateJWT({ username: username, userId: id }),

            });
        }
    } catch (err) {
        res.json({
            message: "Failed to register user",
        });
    }
};

const signinUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    try {
        const isUserExist = await UserModel.findOne({
            $or: [{ username }, { email }],
        });

        if (!isUserExist) {
            res.status(404).json({
                message: "User not found",
            });
        }

        if (isUserExist) {
            if (verifyPassword(password, isUserExist.password)) {
                const id = isUserExist._id;
                res.json({
                    message: "Login Successful",
                    token: generateJWT({ username: username, userId: id }),
                });
                return;
            } else {
                res.json({
                    message: "Wrong Password",
                });
                return;
            }
        }
    } catch (error) {}
};

const updateUser = async (req: userIdRequestType, res: Response) => {
    const { success } = updateBodySchema.safeParse(req.body);

    if (!success) {
        res.status(411).json({
            message: "Error while updating information",
        });
    }

    await UserModel.updateOne(
        {
            _id: req.userId,
        },
        req.body
    );

    if (req.body.password) {
        const passwordHash = hashPassword(req.body.password);
        await UserModel.updateOne(
            {
                _id: req.userId,
            },
            { password: passwordHash }
        );
    }

    res.json({
        message: "User Information Updated Successfully",
    });
};

const getUserByParams = async (req: Request, res: Response) => {
    const filter = req.query.filter || ""

    try{
        const users = await UserModel.find({
            $or:[
                {
                    firstName : {
                        $regex : filter
                    }
                },
                {
                    lastName: {
                        $regex:filter
                    }
                }

            ]
        })

        const usersData = users.map(user => {
            const {_id,firstName,lastName,email,username} = user
            return {_id,firstName,lastName,email,username}
        })

        res.json({
            message : "Searched users",
            data : usersData
        })
    }catch(err){
        res.status(501).json({
            message : "Failed to get users",
            err
        })
    }
};

export { signinUser, signupUser, updateUser, getUserByParams };
