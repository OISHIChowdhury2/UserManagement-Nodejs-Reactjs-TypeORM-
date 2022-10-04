import React from "react";

const login=()=>{
return (
  <>
  <h1>Login Form</h1>
 <div class="container">
  <div class="row">
    <div class="col">
<section class=" text-center text-lg-start">
  <div class="card mb-3">
    <div class="row g-0 d-flex align-items-center">
      <div class="col-lg-4 d-none d-lg-flex">
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" alt="Trendy Pants and Shoes"
          class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
      </div>
      <div class="col-lg-8">
        <div class="card-body py-5 px-md-5">

          <form>
            <div class="form-outline mb-4">
            <label class="form-label" for="form2Example1">Email address</label>
            <input type="email" id="form2Example1" class="form-control" />
            </div>
            <div class="form-outline mb-4">
            <label class="form-label" for="form2Example2">Password</label>
            <input type="password" id="form2Example2" class="form-control" />
            </div>
            <div class="row mb-4">
              <div class="col d-flex justify-content-center">
              </div>
            </div>

            <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

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
export default login;