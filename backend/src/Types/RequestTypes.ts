import { Request } from "express";

export interface userIdRequestType extends Request{
    userId : string
}