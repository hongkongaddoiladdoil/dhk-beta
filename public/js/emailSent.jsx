import React from 'react';
import ReactBootstrap, {Jumbotron, Button, Col, Grid, Panel, Form, FormGroup, ButtonToolbar} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'

class EmailSent extends React.Component {
  render() {
    return(
      <div>
        <h2>The verification Email will be sent to your email address.</h2>
        <h2>Please check your mailbox and click the verify link.</h2>
        <LinkContainer to="/">
          <Button>Back</Button>
        </LinkContainer>
      </div>
    );
  }
}

export default EmailSent;
