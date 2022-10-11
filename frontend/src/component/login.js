import React, { useState } from "react";
import axios from "axios";
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

  const loginInTo = async (e) =>{
    e.preventDefault();
    const {email,password} = user
    if( email && password ){
    axios.post("http://localhost:3000/api/login", user)
    .then( res=> 
      navigation('/Home'));
    }
    else {
      alert("invalid user");
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
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" alt="Trendy Pants and Shoes"
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
)
}
export default Login;