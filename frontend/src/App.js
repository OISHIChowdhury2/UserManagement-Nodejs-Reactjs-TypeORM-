import './App.css';
import React, { Fragment } from "react";
import { Notifications} from 'react-push-notification';
import { Routes, Route } from "react-router-dom";
import HomePage from './component/homepage';
import Login from './component/login';
import Register from './component/register';
import Profile from './component/profile';
import Edit from './component/edit';
// import ValidationJoiHome from "./validation/regValidation"
function App() {
  return (
   <Fragment>
     <Notifications/>
   {/* <div className='container'>
    <Login/> 
       <SignUp/>
       </div>  */}

              <Routes>
                {/* { console.log(isLogin)} */}
                  {/* {Login && <Route path="/Home" element={<Home />}/>} */}
                  <Route path="/Home" element={<HomePage />}/>
                  <Route path="/" element={<Login />}/>
                  <Route path="/signup" element={<Register />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/edit" element={<Edit />} />
                  {/* <Route path="*" element={<NotFound/>}/> */}
              </Routes>

       </Fragment>
  );
}
export default App;

// import './App.css';
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// //  import Home from './component/homepage';
// import Login from './component/login';
// // import SignUp from './component/register';
// export default function  App() {
//   return (
//     <Routes>
  
//     <Route path="/" element={<Login />} />
//   </Routes>
//     );
//   }
  

