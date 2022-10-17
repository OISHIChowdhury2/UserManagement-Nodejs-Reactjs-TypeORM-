
import React, { useState } from "react";
import '../App.css';
function Edit({user}) {
        

//      const editUser = async e => {
//         e.preventDefult();
//         try{
//             const body = {firstName, lastName, email , password, role};

//             const response =await fetch(`http://localhost:3000/reg/update/${user.id}`,{
//                 method: 'PUT',
//                 headers : { "Content-Type": "application/json"},
//                 body: JSON.stringify(body)
//         });
//        console.log(response);
//      }
//      catch(err){

//      }
//  }
     


return (
    <>
<div class="form-bg">
    <div class="container">
        <div class="row">
            <div class="col-md-offset-3 col-md-6">
                <div class="form-container">
                    <h3 class="title">Update Profile</h3>
                    <form class="form-horizontal" id={`id${user.id}`}>
                        <div class="form-group">
                            <label>First Name</label>
                            <input type="text" class="form-control" placeholder="First Name"/>
                        </div>
                        <div class="form-group">
                            <label>Last Name</label>
                            <input type="email" class="form-control" placeholder="Last Name"/>
                        </div>
                        <div class="form-group">
                            <label>Email Address</label>
                            <input type="text" class="form-control" placeholder="Email Address"/>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" placeholder="Password"/>
                        </div>
                        <button class="btn signup">Update Account</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</>
)
}

export default Edit;