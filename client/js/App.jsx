// App.jsx
import React from "react";
import Hello from "./Hello";
import { PageHeader } from "react-bootstrap";
require('../css/fullstack.css');
import HeaderBackgroundImage from '../images/header.jpg';


export default class App extends React.Component {
  addHeaderImg() {
    let headerBg = new Image();
    headerBg.src = HeaderBackgroundImage;
  }

  render () {
    return (
      <PageHeader>
        <div className='header-contents'>
          {this.addHeaderImg()}
          <Hello name='Cameron' />
        </div>
      </PageHeader>
    );
  }
}
