import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import RMHApi from '../RMHApi';
import { useAuth } from './context/auth';
import getFromToken from '../utils';
import axios from 'axios';
import Chart from 'chart.js';
import './Patient.scss'


const Patient = (props) => {
  // console.log("client props", props);
 

  return (
    <li>
      <div className="card text-white bg-dark mb-3 patient-card ">
        <div className="card-header">
          <i className="user-icon far fa-user"></i>
           {props.name} {props.last_name}
        </div>
        <div className="card-body">
            <a id={props.id} href={'/patients/'+props.id} type="button" className="btn btn-secondary btn-sm">Patient Detail</a>
        </div>
    </div>  
    </li>
  )
}

export default Patient;