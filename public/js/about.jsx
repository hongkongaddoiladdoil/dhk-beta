import React from 'react';
import ReactBootstrap, {Jumbotron, Button, Col, Grid, Panel, Form, FormGroup, ButtonToolbar} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class About extends React.Component {
  render() {
    console.log('about');
    return(
      <h2>About</h2>
    );
  }
}

export default About;
