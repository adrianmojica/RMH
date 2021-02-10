import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import RMHApi from '../RMHApi';
import { useAuth } from './context/auth';
import getFromToken from '../utils';
import axios from 'axios';
import Chart from 'chart.js';
import './Graph.scss'


const Appointments = (userId) => {
  
  console.log(userId)
  const [entryData, setEntryData] = useState();

  

  useEffect( () => {
    function getEntries(){

     console.log('appointments');
    }
    getEntries();
    
    
  },[userId])


/*
<script src='https://meet.jit.si/external_api.js'></script>
<!-- main js -->
<script type="text/javascript"> 
  let user = "{{user.username}}";
  let name = "MentalHealthNet{{user.first_name}}{{user.last_name}}"
  let email = "{{user.email}}";
</script>
*/
  

  return (
    <div>
      
     APP
    </div>
  )
}

export default Appointments;