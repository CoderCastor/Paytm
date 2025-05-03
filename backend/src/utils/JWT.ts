import JWT from "jsonwebtoken";
import { JWT_SECRET } from "../config";

export function generateJWT(payload : string | object){
   return JWT.sign(payload,JWT_SECRET,{expiresIn:"1h"})
}