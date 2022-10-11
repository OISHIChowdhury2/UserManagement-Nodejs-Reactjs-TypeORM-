import {Router} from "express";
import {userResister,
    userAuth,
    getOneById}from "../controller/registerController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";
const router = Router();

router.get("/", [checkJwt], userAuth);

router.get(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    getOneById
  );
//   router.put("/edit",userEdit);
//create user
router.post("/register",userResister );
export default router;