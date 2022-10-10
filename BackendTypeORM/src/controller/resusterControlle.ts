import { Request, Response} from "express";

import { Register } from "../entity/Register";

interface UserBody{
    firstName: string;
    lastName: string;
    email : string;
    password: string;
    repassword: string;
}
export const userResister = async(
    req: Request<unknown,unknown,UserBody>,
    res: Response
) => {
    const {firstName,lastName,email,password,repassword}=req.body ;

    const user = new Register();
    user.firstName= firstName;
    user.lastName =lastName;
    user.email = email;
    user.password = password;
    user.repassword = repassword;

    await user.save();
    return res.json(user);
};