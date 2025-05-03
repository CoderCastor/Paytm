import { Router } from "express";
import { getBalance, transferAmount } from "../controllers/AccountControllers";
import { AuthMiddleware } from "../middleware/Auth";

const router = Router()

//@ts-ignore
router.get("/balance",AuthMiddleware,getBalance)
//@ts-ignore
router.post("/transfer",AuthMiddleware,transferAmount)

export default router