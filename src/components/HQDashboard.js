import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import RMHApi from '../RMHApi';
import { useAuth } from './context/auth';
import getFromToken from '../utils';
import SideNavTherapist from './SideNavTherapist';
import Graph from './Graph';
import PatientsList from './PatientsList';
import Appointments from './TherapistAppointments';
import axios from 'axios';
import "../vendor/sb-admin-2.css";
import "../vendor/fontawesome-free/css/all.min.css";
import './HQDashboard.scss'

const HQDashboard = () => {

    
    const [formData, setFormData] = useState({
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        therapist: "",
        password:"",
        is_admin: false
    })
    const { authToken, setAuthToken } = useAuth();
    const userId = getFromToken(authToken, 'username');

    const [patients, setPatients] = useState([]);
  
    useEffect(() => {
        
        const getUser = async () => {
          try {
            let mounted = true;
            const res = await RMHApi.getTherapist(userId);      
            if (mounted) {
              setFormData(res.user)
              renderPatients(res.user);
            }
          } catch (err) {
            
          }
        }
        getUser();
      }, [userId])
    
  
    async function renderPatients(therapist){
      console.log(therapist);
      if(therapist){
        let fullName = therapist.first_name+" "+therapist.last_name;
        console.log(fullName)
        try{
          // TODO fix hardcoded therapist
          const res = await axios.post('http://localhost:3000/users/patients',{fullName});
          setPatients(res.data);
          console.log("******",res);
        }catch(e){
  
        }
      }
      
    }
      
  return (
    <>
      <div id="wrapper">
        {/* SIDENAV */}
        <SideNavTherapist/>
        
        {/* CONTENT */}
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
            
            <div className="container-fluid mg30">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Therapist Dashboard</h1>
                    {/* <a href="/NewEntry" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-book fa-lg text-white-40"></i> Create New Entry</a> */}
                </div>
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Patients</h6>
    
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body patients-card-container">
                                  <PatientsList patients={patients}/>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Pie Chart --> */}
                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Appointments</h6>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body">
                                <Appointments name={formData.first_name} last={formData.last_name} />
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

export default HQDashboard;