import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useParams } from "react-router-dom";
import RMHApi from '../RMHApi';
import { useAuth } from './context/auth';
import getFromToken from '../utils';
import SideNavTherapist from './SideNavTherapist';
import Graph from './Graph';
import PatientsList from './PatientsList';
import Appointments from './Appointments';
import axios from 'axios';
import "../vendor/sb-admin-2.css";
import "../vendor/fontawesome-free/css/all.min.css";
import './HQDashboard.scss'
import './PatientDetail.scss'

const PatientDetail = (props) => {
    console.log(props);
    const {id} = useParams();

    console.log("Detail for id=",id);

    const [formData, setFormData] = useState({
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        therapist: "",
        password:"",
        is_admin: false
    })
    // const { authToken, setAuthToken } = useAuth();
    // const userId = getFromToken(authToken, 'username');
  
    useEffect(() => {
        const getUser = async () => {
          try {  
            console.log(id,"here");
            const res = await RMHApi.getUserById(id);      
            setFormData(res.user[0])
            console.log(res);
            
          } catch (err) {
            
          }
        }
        getUser();
      }, [id])
    
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
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                </div>
                <div className="row">
                    <div className="col-xl-8 col-lg-8">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Patient's Entries Overview</h6>
                                <div className="dropdown no-arrow">
                                    
                                    
                                </div>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body">
                                <div className="chart-area"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                    <Graph userId={formData.id} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Pie Chart --> */}
                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Patient's Information</h6>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body">
                                <div className="patients-info">
                                    <b>Name: </b>{formData.first_name} <br></br>
                                    <b>Last Name: </b> {formData.last_name} <br></br>
                                    <b>Therapist: </b> {formData.therapist} <br></br>
                                    <b>email: </b>{formData.email} <br></br>
                                    <Appointments userEmail={formData.email}/>
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

export default PatientDetail;