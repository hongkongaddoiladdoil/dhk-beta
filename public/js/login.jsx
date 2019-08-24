import React from 'react';
import ReactBootstrap, {Jumbotron, Button, Col, Grid, Panel, Form, FormGroup, ButtonToolbar} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  render() {
    console.log('Login');
    return(
      <h2>Login</h2>
    );
  }
}

export default Login;
