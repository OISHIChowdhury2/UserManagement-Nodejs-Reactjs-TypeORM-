import { validate } from "class-validator";
import { Request, Response} from "express";
import {AppDataSource} from "../data-source";
import { Register } from "../entity/Register";
import bcrypt from "bcryptjs";
// import {useResister} from "../controller/userController"

export const userAuth = async(req: Request, res : Response) => {
    const userRepository = AppDataSource.getRepository(Register);
    const users = await userRepository.find({
        select: ["id","firstName","lastName", "email", "role"]
    });
    res.send(users)
};
export const getOneById = async (req: Request, res: Response) => {
    //Get the ID from the url
     const id: string = req.params.id;
    //Get the user from database
    const userRepository =AppDataSource.getRepository(Register);
    try {
      const user = await userRepository.findOneOrFail({
        select: ["id", "email", "role"] 
      });
    } catch (error) {
      res.status(404).send("User not found");
    }
  };
  
export const userResister = async(req: Request,res: Response
) => {
    const {firstName,lastName,email,password,role}=req.body ;
   
   
    const user = new Register();
    user.firstName= firstName;
    user.lastName =lastName;
    user.email = email;
    user.password = password;
    user.role = role;
    const error = await validate(user);
    if(error.length > 0){
        res.status(400).send(error);
        return;
    }
    user.hashPassword();
    const userRepository =AppDataSource.getRepository(Register);
    try{
        await userRepository.save(user);
    } catch (e){
        res.status(409).send("email already used");
        return;
    }
    console.log(user);
    res.status(201).send("Registed")
};
export const userEdit = async(req: Request,res: Response
  ) => {
  const {id} = req.params;
  const{ firstName,lastName,email,role}= req.body;
  const userRepository = AppDataSource.getRepository(Register);
 try{
  const userEdit =  await userRepository
                        .createQueryBuilder()
                        .update(Register)
                        .set({ firstName :firstName ,lastName: lastName ,email: email,role:role })
                        .where("id = :id",{id: id})
                        .execute();
    res.json(userEdit);
 }
 catch (e){
  res.status(409).send("email already used");
  return;
 }
  }

  export const  deleteUser = async (req: Request, res: Response) => {

    const {id} = req.params;
    const userRepository = AppDataSource.getRepository(Register);
    const deleteUser =  await userRepository
                             .createQueryBuilder()
                             .delete()
                             .where("id = :id",{id: id})
                             .execute();
  
      res.json(deleteUser);

  
  }
