import express from 'express'
import userRouter from '../routes/UserRoutes'
import accountRouter from '../routes/AccountRoutes'
const router = express.Router()

router.use("/user",userRouter)
router.use("/account",accountRouter)

export default router