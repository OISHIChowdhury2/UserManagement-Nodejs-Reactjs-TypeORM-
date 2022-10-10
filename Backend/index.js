const express = require ("express");
const cors = require('cors');
const path = require('path');
const app = express();
app.use(express.json());
const Port= 3000;
const regRouter = require("./Routes/registerRoutes.js");
const authRouter = require ("./Routes/authRouter");
app.use(express.json());

//routes
app.get("/",(req,res)=>{
    res.send("hi i am oishi")
});

app.use('/register',regRouter);
app.use('/login',authRouter);
// app.use('/reg', regRouter);
// app.listen(Port,() => console.log(`app server ${Port}`));

// app.post("/login",(req,res)=>{
//     res.send("my login page");
//     console.log( req.body);
// })

// app.post("/register",(req,res)=>{
//     res.send("my register page");
    // console.log( req.body);
    // const { firstName, lastName,email, password,repassword} = req.body
    //  const user = new User({
    //     firstName,
    //     lastName,
    //     email,
    //     password,
    //     repassword
    //  })
    //  user.save(err=>{
    //     if(err){
    //         res.send(res)
    //     }
    //     else{
    //         res.send({ message : " Done"})
    //     }
    //  })
// })

//url and port 
app.listen(3000,()=>{
    console.log(`http://localhost:${Port}`);
})




