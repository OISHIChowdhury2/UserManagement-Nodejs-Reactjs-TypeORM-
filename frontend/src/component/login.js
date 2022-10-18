import React, { useState } from "react";
import axios from "axios";
import addNotification from 'react-push-notification';
import Joi from "joi-browser";
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigation = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState({});
  const schema = {
    email: Joi.string().required().email({ minDomainAtoms: 2 }).label("Username"),
    password: Joi.string().required().min(4).label("Password"),
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

  const handeleChange = e => {
    // console.log(e.target);
    const { name, value } = e.target;

    // setUser({ 
    //   ...user,
    //   [name]: value
    //   })
    console.log(name, value);
    let errorData = { ...errors };
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
    console.log(name, value);
  }

  function warningNotification() {
    addNotification({
      title: 'Warning',
      subtitle: 'Please fill it',
      message: 'You have to enter email & password',
      theme: 'red',
      closeButton: "X",
    })
  };
  function successNotification() {
    addNotification({
      title: 'Success',
      subtitle: 'You have successfully login',
      message: 'Welcome Home page',
      theme: 'light',
      closeButton: "X",
      backgroundTop: "green",
      backgroundBottom: "yellowgreen"
    })
  };
  const loginInTo = async (e) => {
    e.preventDefault();
    const { email, password } = user
    if (email && password) {
      successNotification();
      axios.post("http://localhost:3000/auth/login", user)
        .then(res =>
          navigation('/Home'));
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
      email: "",
      password: "",
    });
  }

  return (
    <>
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
                      <form onSubmit={validateForm}>
                        <h1 className="col d-flex justify-content-center">Login Page</h1>
                        <div className="form-outline mb-4">
                          <label className="form-label"  >Email</label>
                          <input type="email" className="form-control" name="email" value={user.email} onChange={handeleChange} />
                        </div>

                        {errors.email && (
                          <div className="alert alert-danger alert-dismissible d-flex align-items-center fade show">
                            <i class="bi-exclamation-octagon-fill"></i>
                            {errors.email}
                          </div>
                        )}


                        <div className="form-outline mb-4">
                          <label className="form-label" name="password" >Password</label>
                          <input type="password" className="form-control" name="password" value={user.password} onChange={handeleChange} />
                        </div>
                        {errors.password && (
                          <div className="alert alert-danger alert-dismissible d-flex align-items-center fade show">
                            <i class="fa-solid fa-check"></i>
                            {/* <FontAwesomeIcon icon="fa-solid fa-check" /> */}
                            {errors.password}
                          </div>
                        )}


                        <div className="row mb-4">
                          <div className="col d-flex justify-content-center">
                            <button onClick={loginInTo} class="btn btn-outline-success mb-4" data-mdb-ripple-color="dark"   >Sign in</button>
                            {/* <button onClick={() => navigation('/signup')} type="button" class="btn btn-outline-info mb-4" data-mdb-ripple-color="dark">Register</button> */}
                          </div>
                          <div className="row mb-2">
                            <div className="col ">
                              <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a onClick={() => navigation('/signup')}
                                class="link-danger">Register</a></p>
                            </div>
                          </div>
                        </div>
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