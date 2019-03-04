import React from "react";
import { Button, Grid, Row, Col } from "react-bootstrap";
import { subscribeTopic, unsubscribeTopic } from './api';

var $ = require('jquery');

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Hello ' + this.props.name,
      local_time: null
    };

    subscribeTopic('time', (err, timestamp) => this.setState(timestamp));

    //This binding is necessary to make `this` work in the callback
    this.getPythonHello = this.getPythonHello.bind(this);
    this.onTime = this.onTime.bind(this);
  }

  componentDidMount() {
    subscribeTopic('time', this.onTime);
  }

  componentWillUnmount() {
    unsubscribeTopic('time', this.onTime)
  }

  onTime(err, timestamp) {
    this.setState(timestamp);
  }

  personalizeGreeting(greeting) {
    this.setState({greeting: greeting + ' ' + this.props.name + '!'});
  }

  getPythonHello() {
    $.get(window.location.href + 'hello', (data) => {
      console.log(data);
      this.personalizeGreeting(data);
    });
  }

  render () {
    return (
      <Grid>
        <Row>
          <Col md={9} mdOffset={5}>
            <h1>{this.state.greeting}</h1>
            <hr/>
            <h3>{this.state.local_time}</h3>
          </Col>
        </Row>
        <Row>
        <Col md={9} mdOffset={5}>
          <Button bsSize="large" bsStyle="danger" onClick={this.getPythonHello}>
            Say Hello!
          </Button>
        </Col>
        </Row>
      </Grid>
    )
  }
}
