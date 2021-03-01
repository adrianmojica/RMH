import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import RMHApi from '../RMHApi';
import { useAuth } from './context/auth';
import getFromToken from '../utils';
import axios from 'axios';
import Chart from 'chart.js';
import './Graph.scss'


const Graph = (userId) => {
  
  const [entryData, setEntryData] = useState();

  
  useEffect( () => {
    async function getEntries(){
      try {
        if(userId.userId){
          const res = await axios.get('http://localhost:3000/entries/'+ userId.userId);
          setEntryData(res.data);
          Graphing(res);
        }
      } catch(e) {

      }
    }
    getEntries();
    
    
  },[userId])


  function Graphing(data){
    let entries = data.data;
    let nrs1=[];
    let nrs2=[];
    let nrs3=[];
    let nrs4=[];
    let nrs5=[];
    let labels =[];
    for (let index = 1; index <= entries.length; index++) {
      const element = "Session"+index;
      labels.push(element);
    }
   
    for (let index = 0; index < entries.length; index++) {
        nrs1.push(entries[index]['nrs1']);
        nrs2.push(entries[index]['nrs2']);
        nrs3.push(entries[index]['nrs3']);
        nrs4.push(entries[index]['nrs4']);
        nrs5.push(entries[index]['nrs5']);
    }


    let ctx = document.getElementById('myChart');
    var data = {
      labels: labels,
      datasets: [
        {
          label: "NRS1",
          data: nrs1,
          backgroundColor: "blue",
          borderColor: "lightblue",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: "NRS2",
          data: nrs2,
          backgroundColor: "green",
          borderColor: "lightgreen",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: "NRS3",
          data: nrs3,
          backgroundColor: "yellow",
          borderColor: "yellow",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: "NRS4",
          data: nrs4, 
          backgroundColor: "red",
          borderColor: "red",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: "NRS5",
          data: nrs5,
          backgroundColor: "purple",
          borderColor: "purple",
          fill: false,
          lineTension: 0,
          radius: 5
        }
      ]
    };
  
    //options
    var options = {
      responsive: true,
      title: {
        display: true,
        position: "top",
        fontSize: 18,
        fontColor: "#111"
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          fontColor: "#333",
          fontSize: 16
        }
      }
    };
  
    //create Chart class object
    var chart = new Chart(ctx, {
      type: "line",
      data: data,
      options: options
    });
  }


  return (
    <div>
      
      <canvas id="myChart"></canvas>
    </div>
  )
}

export default Graph;