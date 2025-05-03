import { Router } from "express";
import { getBalance } from "../controllers/AccountControllers";
import { AuthMiddleware } from "../middleware/Auth";

const router = Router()

//@ts-ignore
router.get("/balance",AuthMiddleware,getBalance)

export default router