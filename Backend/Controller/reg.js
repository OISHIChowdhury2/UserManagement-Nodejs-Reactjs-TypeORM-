import { query } from 'express';
import pool from "../Db/db"; 

import queries from ('../querry/querry');

const addRegister=(req,res)=>{
    const {firstName,lastName,email,password,repassword}= req.body;
        pool.query(queries.addRegister,
            [firstName,lastName,email,password,repassword],(error,results)=>{
        if(error) throw error;
        res.status(201).send("created");
        })
    };
export default {
    addRegister,
};