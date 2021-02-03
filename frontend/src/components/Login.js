
import React, { useState } from "react";
import axios from 'axios';
import './Login.scss';
import { useHistory } from 'react-router-dom';


function Login() {
  const history = useHistory()
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
    loginUser();
    setFormData({
      username: "",
      password: ""
    })
  }

  async function loginUser(){
    let body = { username: formData.username,
                password: formData.password};
    let res = await axios.post('http://localhost:3000/login', body);
    console.log(res);
    //save to local storage
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('username', res.data.username);
    history.push('/dashboard');
    
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
                          <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                            <input type="email" className="form-control form-control-user"
                                id="exampleInputEmail" aria-describedby="emailHelp"
                                placeholder="Enter Email Address..." name="username" id="username" onChange={handleChange} value={formData.username}/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control form-control-user"
                                id="exampleInputPassword" placeholder="Password" name="password" id="password" onChange={handleChange} value={formData.password}/>
                        </div>
                        <div className="form-group">
                            <div className="custom-control custom-checkbox small">
                                <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                <label className="custom-control-label" htmlFor="customCheck">Remember
                                    Me</label>
                            </div>
                        </div>
                        <a href="/"  onClick={handleSubmit}  className="btn btn-primary btn-user btn-block">
                            Login
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

export default Login;
