import {Router} from "express";
import {
    userResister
}from "../controller/resusterControlle"
const router = Router();
router.post("/register",userResister );
export default router;