const userBD = {
    user : require('../model/user.json'),
    setUser: function(data){
        this.users = data}
}
const user = require('../model/user.json');
const bcrypt = require('bcrypt');
const fsPromiss = require ('fs').promises;
const path =require('path');

const jwt = require('jsonwebtoken');
require('dotenv').config();
// const fsPromiss = require ('fs').promises;
// const path = require('path');

const handelLogin =async (req,res) => {
    const {email, pwd} = req.body;
    if(!email || !pwd)
    return res.status(400).json({
        'message': "wrong information"});
    const foundUser = userBD.user.find(person => person.email == user);
    
   if(!foundUser) return res.sendStatus(401);
     const match = await bcrypt.compare(pwd,foundUser.password);
    if(match){
        // const accessToken =jwt.sign(
        //     {
        //         "email": foundUser.email },
        //         process.env.ACCESS_TOKEN_SECRET,
        //         {
        //             expiresIn: '30s'
        //         }     
        // );
        // const refreshToken =jwt.sign(
        //     {
        //         "email": foundUser.email },
        //         process.env.REFRESH_TOKEN_SECRET,
        //         {
        //             expiresIn: '1ds'
        //         }     
        // );
        // const otherUser = userBD.user.filter(person=> person.email !== foundUser.email);
        // const currentUser = {...fountUser, refreshToken};
        // userBD.setUser([...otherUser, currentUser]);
        // await fsPromiss.writeFile(
        //     path.join(__dirname,'..','model','user.json'),
        //     JSON.stringify(userBD.user)
        // );
        res.json({ 'success': 'using login'});
}else{
           res.sendStatus(401);
           console.log("hoini");
    }
}
module.exports={ handelLogin
};