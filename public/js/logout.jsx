import React from 'react';
import ReactBootstrap, {Jumbotron, Button, Col, Grid, Panel, Form, FormGroup, ButtonToolbar} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'
import feathersClient from './feathers';

class Logout extends React.Component {
  render() {
    feathersClient.logout();
    return(
      <div>
        <h2>Logout!</h2>
        <LinkContainer to="/">
          <Button>Back</Button>
        </LinkContainer>
      </div>
    );
  }
}

export default Logout;
