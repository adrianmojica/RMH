import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import RMHApi from '../RMHApi';
import { useAuth } from './context/auth';
import getFromToken from '../utils';
import axios from 'axios';
import Chart from 'chart.js';
import './Graph.scss'


const Patient = (userId) => {
  
  const [patients, setPatients] = useState();

  
  useEffect( () => {
    async function getEntries(){
      console.log('HERE!');
    }
    getEntries();
    
    
  },[userId])


  


  return (
    <li>
      <div className="card text-white bg-dark mb-3">
        <div className="card-header">Name</div>
        <div className="card-body">
            <button type="button" className="btn btn-secondary btn-sm">Patient Detail</button>
        </div>
    </div>  
    </li>
  )
}

export default Patient;