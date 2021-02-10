import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import RMHApi from '../RMHApi';
import { useAuth } from './context/auth';
import getFromToken from '../utils';
import axios from 'axios';
import Chart from 'chart.js';
import './Graph.scss'


const Graph = (userId) => {
  
  console.log(userId)
  const [entryData, setEntryData] = useState();

  
  useEffect( () => {
    async function getEntries(){
      const res = await axios.get('http://localhost:3000/entries/'+ userId.userId);
      setEntryData(res.data);
      console.log("here",res);
    }
    getEntries();
    
  },[userId])


  function Graphing(){
 
    console.log(entryData)

    let ctx = document.getElementById('myChart');
    var data = {
      labels: ["match1", "match2", "match3", "match4", "match5"],
      datasets: [
        {
          label: "NRS1",
          data: [10, 50, 25, 70, 40],
          backgroundColor: "blue",
          borderColor: "lightblue",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: "NRS2",
          data: [20, 35, 40, 60, 50],
          backgroundColor: "green",
          borderColor: "lightgreen",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: "NRS3",
          data: [20, 35, 40, 60, 50],
          backgroundColor: "yellow",
          borderColor: "yellow",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: "NRS4",
          data: [20, 35, 40, 60, 50],
          backgroundColor: "red",
          borderColor: "red",
          fill: false,
          lineTension: 0,
          radius: 5
        },
        {
          label: "NRS5",
          data: [20, 35, 40, 60, 50],
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
        text: "Line Graph",
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
      {/* {Graphing()} */}
      <canvas id="myChart"></canvas>
    </div>
  )
}

export default Graph;