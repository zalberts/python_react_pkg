import React from 'react';
import { Doughnut } from "react-chartjs-2";

const a_colors=[
    "#366FD6", 
    "#f23845", 
    "#0BBADE", 
    "#50514f", 
    "#c8c7ad",   
    "#507dd1", 
    "#64cde2", 
    "#f0e76f", 
    "#f0b352", 
    "#ec616a", 
    "#0951d6", 
    "#028da8", 
    "#d736ec", 
    "#74ee7e", 
    "#a345f0"];

const PieChart = (props) => {
    let buildLabels=(num)=>{
        let labels=[];
        for (let i=0;i<num;i++) {
          labels.push('Label '+i)
        };
        return labels;
      };
    let buildBgColor = (num) => {
        let colors=[];
        for (let i=0;i<num;i++) {
          colors.push( a_colors[i])
        };
        return colors;
      };
    let buildHvColor = (num) => {
        let colors=[];
        for (let i=0;i<num;i++) {
          colors.push('#afafaf')
        };
        return colors;
      };
    let buildData = (data_arr) => {
        return {
            labels: buildLabels(data_arr.length),
            datasets: [{
              data: data_arr, 
              backgroundColor:buildBgColor(data_arr.length),
              hoverBackgroundColor:buildHvColor(data_arr.length)
            }]
        }
      }
      return(
        <Doughnut data={ buildData(props.data) } />
    )
};


export default PieChart;