

import React,{Fragment, useState} from "react";

const EditUser = ({ all }) =>{


    const [firstName, setFirstName]= useState(all.firstName);
    const [lastName, setLastName]= useState(all.lastName);
    const [email, setEmail]= useState(all.email);
    const [role, setRole]= useState(all.role);

   
        
  const updateUser = async e => {
    // e.preventDefult();
          try{
            const body = {firstName,lastName,email,role};
   
            const response = await fetch(`http://localhost:3000/reg/update/${all.id}`,{
                method : "PUT",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(body)
            })
 
            console.log(body);
        }
        catch{
            res.send(401);
        }
        
               
  }
 


    return(<Fragment>
<button type="button"
 class="btn btn-primary"
  data-bs-toggle="modal" 
  data-bs-target={`#id${all.id}`}>
  Edit
</button>

<div class="modal fade" id={`id${all.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Information</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
    <div>
            <label className="form-label" >First name</label>
              <input type="text" className="form-control" name="firstame" value={firstName} onChange={e=> setFirstName(e.target.value)}/>
              
              </div>

        <div>
             <label className="form-label" >Last name</label>
                <input type="text" className="form-control" name="lastName" value={lastName}onChange={e=> setLastName(e.target.value)} />
              </div>
              <div>
      
          <label className="form-label">Email</label>
            <input type="email"  className="form-control" name="email" value={email} onChange={e=> setEmail(e.target.value)}/>
          </div>
          <div>
      <label className="form-label" >Role</label>
        <input type="text"  className="form-control" name="role" value={role} onChange={e=> setRole(e.target.value)}/>
      </div>
    
      </div>
      <div class="modal-footer">
        <button type="button"
         class="btn btn-secondary" 
         onClick = { e => updateUser(e)}
         data-bs-dismiss="modal">Save changes</button>
        <button type="button" class="btn btn-primary">Close</button>
      </div>
    </div>
  </div>
</div>
    </Fragment>
    )
}

export default EditUser;