import React from 'react';
import ReactBootstrap, {Jumbotron, Button, Col, Grid, Panel, Form, FormGroup, ButtonToolbar} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'

class Submitted extends React.Component {
  render() {
    return(
      <div>
        <h2>Submitted!</h2>
        <LinkContainer to="/">
          <Button>Back</Button>
        </LinkContainer>
      </div>
    );
  }
}

export default Submitted;
