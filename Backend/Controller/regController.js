const  queries  = require("../querry/querry");
const pool = require( "../Db/db"); 
const user = require('../model/user.json');

const userBD = {
    user : require('../model/user.json'),
    setUser: function(data){
        this.user = data}
}
const fsPromiss = require ('fs').promises;
const path =require('path');
const bcrypt = require('bcrypt');

const handelNewUser = async (req,res)=>{
    const {email,pwd} = req.body;
    if(!email|| !pwd)
    return res.status(400).json({'message': 'please inter the data'});

    const duplicate = userBD.user.find(person => person.email== user);
    if(duplicate) return res.sendStatus(409);

    try{
        const hashedPwd = await bcrypt.hash(pwd, 10);
        const newUser = { "email" : email, "pwd":hashedPwd};
        userBD.setUser([...userBD.user,newUser]);
        await fsPromiss.writeFile(
            path.join(__dirname,'..','model','user.json'),
            JSON.stringify(userBD.user)
        );
        console.log(userBD.user);
        res.status(201).json({'success': `new user ${user} created:`});
    }
    catch(err){
        res.status(500).json({'message':" err.message"});
    }
}



// const addRegister=(req,res)=>{
//     const {firstName,lastName,email,password,repassword}= req.body;
//         pool.query(queries.getRegister,
//             [firstName,lastName,email,password,repassword],(error,results)=>{
//         if(error) throw error;
//         res.status(201).send("created");
//         })
//     };

module.exports = {
    handelNewUser,
};