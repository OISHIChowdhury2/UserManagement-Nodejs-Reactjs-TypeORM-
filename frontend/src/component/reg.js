import React, { useState } from "react";
import axios from "axios";
const Reg =()=>{
  const[user, setUser]= useState({
    firstName:"",
    lastName:"",
    email:"",
    password: "",
    repassword :""
  })
  const handeleChange = e =>{
    const {name,value}= e.target;
    setUser({ 
      ...user,
      [name]: value
      })
    console.log(name,value);
  }
  const register = async (e) =>{
    e.preventDefault();
    const { firstName,email,password,repassword} = user
    if(firstName && email && password &&(password === repassword)){
    axios.post("http://localhost:3000/register", user)
    .then( res=> console.log(res));
    }
    else {
      alert("invalid user");
    }
  }
return (
    <>
  <h1 className="text-center">Registration Form</h1>
<div className="container px-2 py-3 px-md-5 text-center text-lg-start my-4">
  <div className="row gx-lg-5 align-items-center mb-5">
    <div className="col-lg-6 mb-5 mb-lg-0" >
      <h1 className="my-3 display-5 fw-bold ls-tight" >
        The Best Offer <br />
        <span >For Your Business</span>
      </h1>
      <p className="mb-4 opacity-70" >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Temporibus, expedita iusto veniam atque, magni tempora mollitia
        dolorum consequatur nulla, neque debitis eos reprehenderit quasi
        ab ipsum nisi dolorem modi. Quos?
      </p>
    </div>
    <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
      <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
      <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
      <div className="card bg-glass">
        <div className="card-body px-4 py-5 px-md-5">
          <form>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                <label className="form-label" >First name</label>
                  <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={handeleChange}/>
                </div>
              </div>
              <div className="col-md-6 mb-4">
              <div className="form-outline">
              <label className="form-label" >Last name</label>
                <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={handeleChange}/>
              </div>
            </div>
          </div>
          <div className="form-outline mb-4">
          <label className="form-label">Email</label>
            <input type="email"  className="form-control" name="email" value={user.email} onChange={handeleChange}/>
          </div>
          <div className="form-outline mb-4">
          <label className="form-label" >Password</label>
            <input type="password"  className="form-control" name="password" value={user.password} onChange={handeleChange} />
          </div>
          <div className="form-outline mb-4">
          <label className="form-label" >Repassword</label>
            <input type="password"  className="form-control" name="repassword" value={user.repassword} onChange={handeleChange} />
          </div>
          <button  onClick={register} className="btn btn-primary btn-block mb-4">
            Sign up
          </button>
          <div className="text-center">
        </div>
      </form>
      </div>
    </div>
  </div>
</div>
</div>
</>
)
}
export default Reg;