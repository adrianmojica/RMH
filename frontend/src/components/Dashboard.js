import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import RMHApi from '../RMHApi';
import { useAuth } from './context/auth';
import getFromToken from '../utils';
import SideNav from './SideNav';
import Graph from './Graph';
import Appointments from './Appointments';
import axios from 'axios';
import "../vendor/sb-admin-2.css";
import "../vendor/fontawesome-free/css/all.min.css";
import './Dashboard.scss'

const Dashboard = () => {

    
    const [formData, setFormData] = useState({
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        therapist: "DeMarco",
        password:"",
        is_admin: false
    })
    const { authToken, setAuthToken } = useAuth();
    const userId = getFromToken(authToken, 'username');
  
    useEffect(() => {
        
        const getUser = async () => {
          try {
              
            const res = await RMHApi.getUser(userId);      
            setFormData(res.user)
            console.log(res);
          } catch (err) {
            
          }
        }
        getUser();
      }, [userId])
    
  console.log("here",formData);

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
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    <a href="/NewEntry" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-book fa-lg text-white-40"></i> Create New Entry</a>
                </div>
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Entries Overview</h6>
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
                                <h6 className="m-0 font-weight-bold text-primary">Appointments</h6>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body">
                                <Appointments userEmail={formData.email}/>
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

export default Dashboard;