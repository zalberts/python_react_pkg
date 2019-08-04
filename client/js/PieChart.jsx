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


export default class PieChart extends React.Component {

    buildLabels(num) {
    let labels=[];
    for (let i=0;i<num;i++) {
      labels.push('Label '+i)
    };
    return labels;
  }

  buildBgColor(num) {
    let colors=[];
    for (let i=0;i<num;i++) {
      colors.push( a_colors[i])
    };
    return colors;
  }
  buildHvColor(num) {
    let colors=[];
    for (let i=0;i<num;i++) {
      colors.push('#afafaf')
    };
    return colors;
  }

  buildData(data_arr) {
    return {
        labels: this.buildLabels(data_arr.length),
        datasets: [{
          data: data_arr, 
          backgroundColor:this.buildBgColor(data_arr.length),
          hoverBackgroundColor:this.buildHvColor(data_arr.length)
        }]
    }
  }

  render() {
      console.log(this.props.data);
      return(
          <Doughnut data={ this.buildData(this.props.data) } />
      )
  }
};
