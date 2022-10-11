import { validate } from "class-validator";
import { Request, Response} from "express";
import {AppDataSource} from "../data-source";
import { Register } from "../entity/Register";

// import {useResister} from "../controller/userController"


export const userAuth = async(req: Request, res : Response) => {
    const userRepository = AppDataSource.getRepository(Register);
    const users = await userRepository.find({
        select: ["id", "email" , "role"]
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
    const {firstName,lastName,email,password,repassword,role}=req.body ;

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
    }
    catch (e){
        res.status(409).send("email already used");
        return;
    }

    res.status(201).send("Registed")

    // await user.save();
    // return res.json(user);
};

// export const userEdit = async(req: Request,res: Response
//   ) => {

//     const id = req.params.ID;
//      res.send(id)

//     const{ firstName,lastName,email,password,repassword,role}= req.body;

//     const userRepository = AppDataSource.getRepository(Register);

//     let user = await userRepository.findOneOrFail(id);
//     user.firstName= firstName;
//     user.lastName =lastName;
//     user.email = email;
//     user.password = password;
//     user.repassword = repassword;
//     user.role = role;
//     const error = await validate(user);
//     if(error.length > 0){
//       res.status(400).send(error);
//       return;
//     }
//     res.status(404).send("user not found");
//     return;
//   }

//   export const  deleteUser = async (req: Request, res: Response) => {
//     //Get the ID from the url
//     const id = req.params.id;
  
//     const userRepository = AppDataSource.getRepository(Register);
//     let user: Register;
//     try {
//       user = await userRepository.findOneOrFail(id);
//     } catch (error) {
//       res.status(404).send("User not found");
//       return;
//     }
//     userRepository.delete(id);
  
//     //After all send a 204 (no content, but accepted) response
//     res.status(204).send();
//   };
