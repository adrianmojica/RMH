import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import SideNav from './SideNav';
import "../vendor/sb-admin-2.css";
import "../vendor/fontawesome-free/css/all.min.css";
import './Dashboard.scss'

const Dashboard = () => {
  
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
                    <a href="/" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-book fa-lg text-white-40"></i> Create New Entry</a>
                </div>
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Entries Overview</h6>
                                <div className="dropdown no-arrow">
                                    <a className="dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                    </a>
                                    
                                </div>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body">
                                <div className="chart-area"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                    
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