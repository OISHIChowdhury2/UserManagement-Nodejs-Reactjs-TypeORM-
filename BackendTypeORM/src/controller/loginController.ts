import e, { Request,Response } from "express";
import * as jwt from "jsonwebtoken";
import {AppDataSource} from "../data-source";
import bcript from "bcryptjs";
import { Register } from "../entity/Register";

 import config from "../config/config"

 export const userLogin= async ( req:Request, res: Response)=>{
        let{email, password} = req.body;
        if(!(email && password)){
            res.status(400).send();
        }
       const userRepository = AppDataSource.getRepository(Register);
       let user = await userRepository.findOne({ where: { email: email } });  
        if(!user){
            res.status(400).json({"message": "***Invalid Email or Password"});
       }else{
               const validPassword = await bcript.compare(password,user.password);
               console.log(validPassword);
               if(!validPassword) {
               res.status(400).send({"message": "***Invalid Email or Password"});
            
               }else{
                //    const token = user.generateAutToken();
                //    //const token = jwt.sign({id:validUser.user_id}, config.get('jwtPrivateKey'));
                //    res.status(200).send(token);

                   res.status(200).json({"message": "true"});
               }
               console.log(user);
           }

        // if (!user.checkIfUnencryptedPasswordIsValid(password)) {
        //     res.status(401).send();
        //     return;
        //   }
        //   const token = jwt.sign(
        //     { ID: user.id, email:user.email, password:user.password},
        //     config.jwtSecret,
        //     { expiresIn : "10"}
        // );
        // res.send(token);   
    };

export default  userLogin;




