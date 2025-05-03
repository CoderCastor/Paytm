import JWT from "jsonwebtoken";
import { Response,NextFunction } from "express";
import { JWT_SECRET } from "../config";
import { JWTdecodedType } from "../Types/JwtDecodedType";
import { userIdRequestType } from "../Types/RequestTypes";



export function AuthMiddleware(req:userIdRequestType,res:Response,next:NextFunction){
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        res.status(498).json({
            message : "Invalid Token"
        })
    }

    const token = authHeader?.split(' ')[1] as string
    try{
        const decoded = JWT.verify(token,JWT_SECRET) as JWTdecodedType

        console.log(decoded)
        req.userId  = decoded.userId
        
        next();
    }catch(error){
        res.status(498).json({
            message : "Invalid Token"
        })
    }

}