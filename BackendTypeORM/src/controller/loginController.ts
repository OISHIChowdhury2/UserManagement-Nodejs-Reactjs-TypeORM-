import { Request,Response } from "express";
import * as jwt from "jsonwebtoken";
import {AppDataSource} from "../data-source";
import { validate } from "class-validator";

import { Register } from "../entity/Register";

 import config from "../config/config"

 export const userLogin= async ( req:Request, res: Response)=>{
        let{email, password} = req.body;

        if(!(email && password)){
            res.status(400).send();

        }
        const userRepository =AppDataSource.getRepository(Register);
        let user = await userRepository.findOneOrFail({ where: { email } });      
        if (!user.checkIfUnencryptedPasswordIsValid(password)) {
            res.status(401).send();
            return;
          }
          const token = jwt.sign(
            { ID: user.id, email:user.email, password:user.password},
            config.jwtSecret,
            { expiresIn : "10"}
        );
        res.send(token);   
    };

export default  userLogin;




