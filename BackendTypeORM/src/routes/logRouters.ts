import {Router} from "express";
import  userLogin from "../controller/loginController";
const router = Router();


router.post("/login",userLogin);
export default router;