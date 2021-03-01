import React, { useState } from "react";
import './Register.scss';
import axios from 'axios';

function Register() {


  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password:"",
    is_admin: false
  })
  
  function handleChange(evt) {
    const {name, value} = evt.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  function handleSubmit(event){
    console.log("here");
    event.preventDefault();
    setFormData(formData);
    console.log(formData);
    addUser();
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      therapist: "DeMarco",
      password:"",
      is_admin:false
    })
  }

  async function addUser(){ 
    let body = { username: formData.email,
                 password: formData.password,
                 first_name: formData.first_name,
                 last_name: formData.last_name,
                 therapist: formData.therapist,
                 email: formData.email,
                 is_admin: false
               };
    let res = await axios.post('http://localhost:3000/registertherapist', body);
    console.log(res);
    //TODO: redirect to login
  }
  



  return (
    <>
    <div className="login-register">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                      </div>
                        <form className="user">
                            <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input type="text" className="form-control form-control-user"
                                        placeholder="First Name" name="first_name" id="first_name" onChange={handleChange} value={formData.first_name}/>
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control form-control-user" 
                                        placeholder="Last Name" name="last_name" id="last_name" onChange={handleChange} value={formData.last_name}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control form-control-user"
                                    placeholder="Email Address" name="email" id="email" onChange={handleChange} value={formData.email}/>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-12 mb-3 mb-sm-0">
                                    <input type="password" className="form-control form-control-user"
                                        placeholder="Password" name="password" id="password" onChange={handleChange} value={formData.password}/>
                                </div>
                            </div>
                            <a href="login.html" onClick={handleSubmit} className="btn btn-primary btn-user btn-block">
                                Register Account
                            </a>
                        </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Register;
