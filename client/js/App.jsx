// App.jsx
import React from "react";
import Hello from "./Hello";
import { PageHeader } from "react-bootstrap";
require('../css/fullstack.css');
import HeaderBackgroundImage from '../images/header.jpg';
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

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


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [
          'label #1',
          'label #2',
          'label #3'
        ],
        datasets: [{
          data:[80,20,10], 
          backgroundColor:['#000000','#aaaaaa','#324fff'],
          hoverBackgroundColor:['#555555','#555555','#555555']
        }]
      }
      }
    }

  getNewData() {
    axios.get(window.location.href + '/api/piedata')
      .then((res) => {
        //console.log(res);
        let piedata = this.buildData(res.data.data);
        console.log(piedata)
        this.setState(piedata)
      }).catch((res) =>{
        console.log(res)
      })
  }

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
      data: {
        labels: this.buildLabels(data_arr.length),
        datasets: [{
          data: data_arr, 
          backgroundColor:this.buildBgColor(data_arr.length),
          hoverBackgroundColor:this.buildHvColor(data_arr.length)
        }]
      }
      
    }
  }

  componentDidMount(){
    this.getNewData();
  }

  addHeaderImg() {
    let headerBg = new Image();
    headerBg.src = HeaderBackgroundImage;
  }

  render () {
    return (
          <Doughnut data={this.state.data} />
    );
  }
}
