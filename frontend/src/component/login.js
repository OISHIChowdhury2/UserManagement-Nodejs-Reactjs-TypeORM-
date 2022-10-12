import React, { useState } from "react";
import axios from "axios";
import addNotification from 'react-push-notification';
// import { Notifications} from 'react-push-notification';
import { useNavigate } from "react-router-dom"
const Login=()=>{
  const navigation =useNavigate();
  const[user, setUser]= useState({
    email:"",
    password: ""
  })
  const handeleChange = e =>{
    // console.log(e.target);
    const {name,value}= e.target;

    setUser({ 
      ...user,
      [name]: value
      })
    console.log(name,value);
    }


    function warningNotification (){
      addNotification({
        title: 'Warning',
        subtitle: 'Please fill it',
        message: 'You have to enter email & password',
        theme: 'red',
        closeButton:"X",
      })
    };
    function successNotification (){
      addNotification({
        title: 'Success',
        subtitle: 'You have successfully login',
        message: 'Welcome Home page',
        theme: 'light',
        closeButton:"X",
        backgroundTop:"green",
        backgroundBottom:"yellowgreen"
      })
    };
  const loginInTo = async (e) =>{
    e.preventDefault();
    const {email,password} = user
    if( email && password ){
      successNotification();
    axios.post("http://localhost:3000/api/login", user)
    .then( res=> 
      navigation('/Home'));
    }
    else {
      warningNotification();
    }
  }
return (
  <>
  <h1>Login Form</h1>
 <div className="container">
  <div className="row">
    <div className="col">
<section className=" text-center text-lg-start">
  <div className="card mb-3">
    <div className="row g-0 d-flex align-items-center">
      <div className="col-lg-4 d-none d-lg-flex">
        <img src="https://cdn.pixabay.com/photo/2015/05/28/09/08/hyacinth-787758_960_720.jpg" alt="Trendy Pants and Shoes"
          className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
      </div>
      <div className="col-lg-8">
        <div className="card-body py-5 px-md-5">
          <form>
            <div className="form-outline mb-4">
            <label className="form-label"  >Email</label>
            <input type="email"  className="form-control" name="email" value={user.email} onChange={handeleChange}/>
            </div>
            <div className="form-outline mb-4">
            <label className="form-label" name="password" >Password</label>
            <input type="password"  className="form-control" name="password" value={user.password} onChange={handeleChange}/>
            </div>
            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
              </div>
            </div>
            <button onClick={loginInTo} className="btn btn-primary btn-block mb-4">Sign in</button>
            <label>OR</label>
            <button onClick={() => navigation('/signup')} type="button" className="btn btn-primary btn-block mb-4">Register</button>
          </form>
        </div>
      </div>  
    </div>
   </div>
</section>
       </div>
      </div>
    </div>
  </>
);
}
export default Login;