import {Router} from "express";
import {userResister,userEdit,userAuth,deleteUser
  }from "../controller/registerController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";
const router = Router();

router.get("/all", userAuth);


   router.delete("/delete/:id",deleteUser);
//create user
router.post("/register",userResister);

router.put(
  "/update/:id",
  userEdit
);
export default router;