import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import SideNav from './SideNav';

import "../vendor/sb-admin-2.css";
import "../vendor/fontawesome-free/css/all.min.css";
import './Dashboard.scss';
import EntryForm from './EntryForm';

const NewEntry = () => {
  
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
                    <h1 className="h3 mb-0 text-gray-800">New Entry</h1>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                               
                            </div>
                            {/* <!-- Card Body --> */}
                            <div className="card-body">
                                <div className="chart-area"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                    NEW ENTRY HERE
                                    <EntryForm/>
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

export default NewEntry;