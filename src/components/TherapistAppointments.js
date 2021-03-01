import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
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
import Alert from 'react-bootstrap/Alert'

const TherapistAppointments = (props) => {


  const [appointments, setAppointments] = useState();
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



useEffect(() => {
    
    const getUser = async () => {
      try {
        let mounted = true;
        const res = await RMHApi.getTherapist(userId);      
        if (mounted) {
          setFormData(res.user)
          renderAppointments(res.user);
        }
      } catch (err) {
        
      }
    }
    getUser();
  }, [userId])

    
  

    async function renderAppointments(therapist){
      if(therapist){
        let fullName = therapist.first_name+" "+therapist.last_name;
        console.log(fullName)
        try{
          // TODO fix hardcoded therapist
          const res = await axios.post('http://localhost:3000/appointments/patients',{fullName});
          setAppointments(res.data);
          
        }catch(e){
  
        }
      }
    
    }
    

    console.log("APPOINTMENTS->", appointments);
    let content;
    if (appointments) {
       content = appointments.map((item,i) =>{
        return (
          <div className="app-alert" key={i} id={item.id} name={item.firstName} last_name={item.lastName}>
            <Alert variant="success">
              <h6><i className="fas fa-clock"></i> {item.date} / {item.time}</h6>
              <p>
                {item.firstName} {item.lastName}<br></br>
                {item.category}<br></br>
                <a href={item.firstName+"_"+item.lastName} className="alert-btn btn btn-sm btn-success"><i className="fas fa-video"></i> Meeting</a>
              </p>
            </Alert>
          </div>
        )
      })
    } else {
      content = <div>Loading Appointments...</div>
    }
  return (
    <div className="app-frame">
      {content}
    </div>
  )
}

export default TherapistAppointments;