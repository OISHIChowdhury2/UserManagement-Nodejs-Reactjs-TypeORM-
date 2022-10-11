import { Request,Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";

import { Register } from "../entity/Register";

export const checkRole = (roles: Array<string>)=>{
    return async(req: Request, res: Response, next: NextFunction)=>{
        const id = res.locals.jwtPayload.id;

        const userRepository = AppDataSource.getRepository(Register);
        let user = await userRepository.findOneByOrFail(id);
      console.log(id);
      

        if(roles.indexOf(user.role) >-1)next();
        else res.status(401).send();
    }
}
