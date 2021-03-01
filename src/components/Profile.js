import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import RMHApi from '../RMHApi';
import { useAuth } from './context/auth';
import getFromToken from '../utils';
import SideNav from './SideNav';
import axios from 'axios';
import './Profile.scss'

const Profile = () => {
  const [formData, setFormData] = useState({
      first_name: "",
      last_name: "",
      email: "",
      therapist: "",
      password:"",
      is_admin: false
  })
  const { authToken, setAuthToken } = useAuth();
  const [ therapists , setTherapists ] =useState();


 
  const userId = getFromToken(authToken, 'username');

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await RMHApi.getUser(userId); 
        setFormData(res.user[0]);
       
      } catch (err) {
        
      }
    }

    const getTherapistOptions = async () => {
     console.log('hereee')
      try{
        const res = await axios.get('http://localhost:3000/therapists/options/');
        console.log(res);
        setTherapists(res.data.therapists);
      }catch(e){

      }
    }
    getUser();
    getTherapistOptions();
    
  }, [userId]);



  const handleChange = e => {
    const { name, value } = e.target
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  function handleSubmit(event){
    event.preventDefault();
    setFormData(formData);
    updateUser();
  }
  

  async function updateUser(){
    let body = { 
      username: formData.email,
      password: formData.password,
      first_name: formData.first_name,
      last_name: formData.last_name,
      therapist: formData.therapist,
      email: formData.email,
      is_admin: false
    };
    const res = await RMHApi.updateUser(userId, body);   
  }

  function generateOptions(therapists){
    console.log('here', therapists);
    if(therapists){
      
        let options = therapists.map((item, i) => {
      return (
      	<option key={i} value={item.value}>{item.value}</option>
      )
      });
      return options;
    }   
  }
  



  return (
    
    <>
      <div id="wrapper">
        {/* SIDENAV */}
        <SideNav/>
        
        {/* CONTENT */}
          <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
              
              <div className="container-fluid mg30">
                  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                      <h1 className="h3 mb-0 text-gray-800">Profile</h1>
                  </div>
                  <div className="row">
                      <div className="col-xl-12 col-lg-12">
                        <div className="card shadow mb-4">
                          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                              <h6 className="m-0 font-weight-bold text-primary">Personal Information</h6>
                          </div>
                          <div className="card-body">
                              <div className="chart-area"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                  <form>
                                    <div className="form-group row">
                                      <div className="col-sm-6 mb-3 mb-sm-0">
                                        <label className="col-sm-12 profile_field" htmlFor="first_name">First Name</label>
                                        <input type="text" className="form-control form-control-user" placeholder="First Name" name="first_name" id="first_name" onChange={handleChange} value={formData.first_name}/>
                                      </div>
                                      <div className="col-sm-6">
                                        <label className="col-sm-12 profile_field" htmlFor="last_name">Last Name</label>
                                        <input type="text" className="form-control form-control-user" placeholder="Last Name" name="last_name" id="last_name" onChange={handleChange} value={formData.last_name}/>
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label className="col-sm-12 profile_field" htmlFor="email">Email</label>
                                      <input type="email" className="form-control form-control-user"  placeholder="Email Address" name="email" id="email" onChange={handleChange} value={formData.email}/>
                                    </div>
                                    <div className="form-group">
                                      <label className="col-sm-12 profile_field" htmlFor="therapist">Therapist</label>
                                        <select className="form-control form-control-user" name="therapist" id="therapist" value={formData.therapist} onChange={handleChange}>
                                          {generateOptions(therapists)}
                                        </select>
                                    </div>
                                    <div className="form-group row">
                                      <div className="col-sm-12 mb-3 mb-sm-0">
                                        {/* <input type="password" className="form-control form-control-user" placeholder="Password" name="password" id="password" onChange={handleChange} value={formData.password}/> */}
                                      </div>
                                    </div>
                                    <div className="form-group row">
                                      <div className="col-sm-12 mb-3 mb-sm-0">
                                        <a href="login.html" onClick={handleSubmit} className="btn btn-primary btn-user btn-block">
                                            Update Info
                                        </a>
                                      </div>
                                    </div>
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
  )
}

export default Profile;