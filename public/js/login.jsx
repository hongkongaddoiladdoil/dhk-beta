import React from 'react';
import ReactBootstrap, {Jumbotron, Button, Col, Grid, Panel, Form, FormGroup, ButtonToolbar} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import feathersClient from './feathers';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailToSubmit: '',
      passwordToSubmit: '',
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const emailToSubmit = this.state.emailToSubmit;
    const passwordToSubmit = this.state.passwordToSubmit;

    feathersClient.authenticate({
      strategy: 'local',
      email: emailToSubmit,
      password: passwordToSubmit
    }).then(response => {
      console.log('Authenticated!', response);
      return feathersClient.passport.verifyJWT(response.accessToken);
    }).then(payload => {
      console.log('JWT Payload', payload);
      return feathersClient.service('users').get(payload.userId);
    }).then(user => {
      feathersClient.set('user', user);
      console.log('User', feathersClient.get('user'));
    }).catch(function(error){
      console.error('Error authenticating!', error);
    });

    this.props.history.push('/');
  }

  render() {
    const emailToSubmit = this.state.emailToSubmit;
    const passwordToSubmit = this.state.passwordToSubmit;
    return(
      <div className="container">
        <div className="col-xs-8">
          <h1>Login</h1>
          <div>
            <Form onSubmit={this.onSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email" name="emailToSubmit" value={emailToSubmit} onChange={this.onChange}/>
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="passwordToSubmit" value={passwordToSubmit} onChange={this.onChange}/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
