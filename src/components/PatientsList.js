import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import RMHApi from '../RMHApi';
import { useAuth } from './context/auth';
import getFromToken from '../utils';
import axios from 'axios';
import Patient from './Patient';
import './PatientList.scss'


const PatientsList = (patients) => {
  // console.log(patients);
  


  return (
      <ul className="patient-list">
        {patients.patients.map((item,i) =>{
          return (
            <Patient key={i} id={item.id} name={item.first_name} last_name={item.last_name} />
          )
        })}
      </ul>
  )
}

export default PatientsList;