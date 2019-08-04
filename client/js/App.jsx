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
      options: [],
      num_data: 3
      };
      this.handleNumChange=this.handleNumChange.bind(this);
    }
  
    
  getNewData(value) {
    axios.get(window.location.href + 'api/piedata',{
              params: {
                data_points:value
              }
            })
      .then((res) => {
        //console.log(res);
        this.setState(res.data)
        console.log(res.data)
      }).catch((res) =>{
        console.log(res)
      })
  }

  componentDidMount(){
    this.getNewData(this.state.num_data);
  }

  addHeaderImg() {
    let headerBg = new Image();
    headerBg.src = HeaderBackgroundImage;
  }

  handleNumChange (event) {
    let val = event.target.value;
    if (!isNaN( val ) && val<=15) {
      this.setState({num_data: val });
      if (val!="") {
        this.getNewData(val);
      }
    }
  }

  render () {
    return (
          <div>
            <PieChart data={this.state.data} />
            <input value={this.state.num_data} onChange={this.handleNumChange}/>
          </div>
    );
  }
}
