import React, { useState } from "react";
import axios from "axios";
// import React, { useState } from "react";
import Joi from "joi-browser";

// import { toast } from "react-toastify";
import addNotification from 'react-push-notification';
import { useNavigate } from "react-router-dom"


const Reg =(props)=>{

  const navigation =useNavigate();

  const[user, setUser]= useState({
    firstName:"",
    lastName:"",
    email:"",
    password: "",
    role : ""
  })

  const [errors, setErrors]= useState({});
  const schema = {
  firstName : Joi.string().required().label("FirstName"),
  lastName : Joi.string().label("lastName"),
  email: Joi.string().required().email({ minDomainAtoms: 2 }).label("Username"),                                      
  password: Joi.string().required().min(4).label("Password"),
  role : Joi.string().required().label("role"),
  };
const validateForm = (e) => {
  e.preventDefault();
  const result = Joi.validate(user, 
      schema, { abortEarly: false });
  console.log(result);
  const { error } = result;
  if (!error) {
    return null;
  } else {
    const errorData = {};
    for (let item of error.details) {
      const name = item.path[0];
      const message = item.message;
      error[name] = message;
    }
    console.log(errors);
    setErrors(errorData);
    return errorData;
  }
};

  const handeleChange = (e) =>{
    
    const {name,value}= e.target;
    // setUser({ 
    //   ...user,
    //   [name]: value
    //   })
      let errorData={...errors};
      const errorMessage = validateProperty(e);
    if (errorMessage) {
      errorData[name] = errorMessage;
    } else {
      delete errorData[name];
    }
    let customerData = { ...user };
    customerData[name] = value;
    setUser(customerData);
    setErrors(errorData);
    console.log(name,value);
  }
  function warningNotification (){
    addNotification({
      title: 'Warning',
      subtitle: 'Please fill it',
      message: 'You have to enter fill up the form',
      theme: 'red',
      closeButton:"X",
    })
  };
  function successNotification (){
    addNotification({
      title: 'Success',
      subtitle: 'You have successfully Registered',
      message: 'Welcome Home page',
      theme: 'light',
      closeButton:"X",
      backgroundTop:"green",
      backgroundBottom:"yellowgreen"
    })
  };
 

  const register = async (e)  =>{
    e.preventDefault();
    const { firstName,email,password,role} = user
    if(firstName && email && password && role){
      successNotification();
    axios.post("http://localhost:3000/reg/register", user)
    .then( res=>
      navigation('/')
      );
    }
    else {
      warningNotification();
    } 
  }

  const validateProperty = (e) => {
    const { name, value } = e.target;
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const result = Joi.validate(obj, subSchema);
    const { error } = result;
    return error ? error.details[0].message : null;
  };
  const clearState = () => {
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "",
    });
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
      <form onSubmit={validateForm} className="ui form">
        <div className="row">
          <div className="form-outline mb-4">
            <label className="form-label" >First name</label>
              <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={handeleChange}/>
              </div>
                  {errors.firstName && (
                <div className="alert alert-danger">
                  {errors.firstName}
                </div>
              )}
          <div className="form-outline mb-4">
             <label className="form-label" >Last name</label>
                <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={handeleChange}/>
              </div>
            </div>
           {errors.lastName && (
          <div className="alert alert-danger">
            {errors.lastName}
          </div>
        )}

          <div className="form-outline mb-4">
          <label className="form-label">Email</label>
            <input type="email"  className="form-control" name="email" value={user.email} onChange={handeleChange}/>
          </div>
           {errors.email && (
          <div className="alert alert-danger">
            {errors.email}
          </div>
        )}
                
      <div className="form-outline mb-4">
      <label className="form-label" >Password</label>
        <input type="password"  className="form-control" name="password" value={user.password} onChange={handeleChange} />
      </div>
           {errors.password && (
          <div className="alert alert-danger">
            {errors.password}
          </div>
        )}

      <div className="form-outline mb-4">
      <label className="form-label" >Role</label>
        <input type="text"  className="form-control" name="role" value={user.role} onChange={handeleChange} />
      </div>
           {errors.role && (
          <div className="alert alert-danger">
            {errors.role}
          </div>
        )}
          <button  onClick={ register} class="btn btn-outline-success" data-mdb-ripple-color="dark">
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