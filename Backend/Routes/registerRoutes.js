import { Router } from "express";
const router = Router();

import { addRegister } from "../Controller/reg";

router.post('/register',addRegister);

export default {
     router
    };

