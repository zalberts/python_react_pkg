// App.jsx
import React from "react";
import Hello from "./Hello";
import { PageHeader } from "react-bootstrap";
require('../css/fullstack.css');
import HeaderBackgroundImage from '../images/header.jpg';
import PieChart from "./PieChart";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      options: []
      }
    }
    
  getNewData() {
    axios.get(window.location.href + 'api/piedata')
      .then((res) => {
        //console.log(res);
        this.setState(res.data)
        console.log(res.data)
      }).catch((res) =>{
        console.log(res)
      })
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
          <PieChart data={this.state.data} />
    );
  }
}
