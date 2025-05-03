import {Router} from "express"
import { signupUser, signinUser, updateUser, getUserByParams } from "../controllers/UserControllers"
import { AuthMiddleware } from "../middleware/Auth"

const router = Router()

router.post("/signup",signupUser)
router.post("/signin",signinUser)

//@ts-ignore
router.put('/',AuthMiddleware,updateUser)
router.get('/bulk',getUserByParams)

// router.get("/user",AuthMiddleware)

export default router;