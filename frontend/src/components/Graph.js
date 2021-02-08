import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import RMHApi from '../RMHApi';
import { useAuth } from './context/auth';
import getFromToken from '../utils';
import axios from 'axios';


const Graph = (props) => {
  const userid = props.userId;
  const [entryData, setEntryData] = useState({});



  async function getEntries(id){
    console.log(id);
    if(id){
      axios.get('http://localhost:3000/entries/'+id)
            .then(res => {
                setEntryData(res);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    
  }


  useEffect(() => {
        
    const getUser = async () => {
      try {
        console.log("HERE")
        getEntries(userid);
       
      } catch (err) {
        
      }
    }
    
    getUser();
    
  },[userid])

  function Graphing(){
    
  }

  
  console.log(entryData.data);
  return (
    <>
      Graph 
      <canvas id="myChart" ></canvas>
    </>
  )
}

export default Graph;