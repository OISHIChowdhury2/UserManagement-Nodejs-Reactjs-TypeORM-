import { Request,Response } from "express";
// import * as jwt from "jsonwebtoken";

import {getRepository} from "typeorm";

import { Register } from "../entity/Register";

class LogController {

    static login = async ( req:Request, res: Response)=>{
        let{email, password} = req.body;
        if(!(email&& password)){
            res.status(400).send();
        }

        const userRepository = getRepository(Register);

        let user:Register;
        try{
            user= await userRepository.findOneByOrFail({ where: { email } });
        }
        catch(error){
            res.status(401).send();
        }
        

    }

}

export default LogController;




