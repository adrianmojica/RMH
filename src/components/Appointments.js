import React, { useState, useEffect } from 'react';
// import { Redirect } from 'react-router-dom';
// import RMHApi from '../RMHApi';
// import { useAuth } from './context/auth';
// import getFromToken from '../utils';
import axios from 'axios';
// import Chart from 'chart.js';
// import './Graph.scss'


const Appointments = (email) => {
  let userEmail= "lornebatman@gmail.com";
  // console.log("this",email)
  const [appointment, setAppointment] = useState([]);
  const [notice, setNotice] = useState("No Upcoming Appointments");
  

  useEffect( () => {
    async function getEntries(){
      try {
      const res = await axios.get('http://localhost:3000/appointments/'+ userEmail); 
      //change to right email variable when possible.
        if(res.data){
          setAppointment(res.data[0]);
          checkAppointments(res.data[0]);
        } 
      } catch(e) {

      }
    }
    getEntries();
    
    
  },[userEmail])


  function checkAppointments(app){
    if(app !== null){
      let appDate= app.date;
      let time = app.time;
      let timezone = app.timezone;
      // let therapist = app.calendar;
      let location = app.location;
      let message = <div className="appointment">
                      <b>Date:</b> <span className="badge badge-success">{appDate} </span> <br></br>
                      <b>Time:</b> {time} <br></br>
                      <b>Timezone:</b> <span>{timezone}</span> <br></br>
                      <b>Location:</b> {location} <br></br><br></br>
                    </div>;
      setNotice(message);
    }
  }
  
  

  

function startMeeting(evt){
  evt.preventDefault();
  let url = "https://meet.jit.si/"+appointment.firstName+"_"+appointment.lastName;
  window.open(url, '_blank');
}

  return (
    <div>
     <hr></hr>
     <h6 className="centered">Patient's Upcoming Appointment</h6>
     <div>{notice}</div>
     <button onClick={startMeeting} className="btn btn-success col-xl-12 col-lg-12"><i className="fas fa-video"></i> Meeting Link</button>
     
     
    </div>
  )
}

export default Appointments;