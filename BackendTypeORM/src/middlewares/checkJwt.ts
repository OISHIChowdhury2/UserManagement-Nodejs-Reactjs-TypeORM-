import { Request, Response, NextFunction } from "express";
import *as jwt from "jsonwebtoken";
import config from "../config/config";

export const checkJwt =  ( req: Request, res: Response, next: NextFunction)=>{
    const token = <string>req.headers["login"];
    let jwtPayload;

    try{
        jwtPayload = <any>jwt.verify(token,config.jwtSecret);
        res.locals.jwtPayload = jwtPayload;
    }
    catch(error){
        res.status(401).send();
        return;
    }

    const { id , email} = jwtPayload;

    const newToken = jwt.sign({id,email},config.jwtSecret,{
        expiresIn: "30s"
    });
    res.setHeader("token",newToken);

    next();
};