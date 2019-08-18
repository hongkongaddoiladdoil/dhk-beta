import React from 'react';
import ReactBootstrap, {Jumbotron, Button, Col, Grid, Panel, Form, FormGroup, ButtonToolbar} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import axios from 'axios';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameToSubmit: '',
      emailToSubmit: '',
      passwordToSubmit: '',
      roleToSubmit: '',
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    console.log('Submit form');
    e.preventDefault();
    // get our form data out of state
    const usernameToSubmit = this.state.usernameToSubmit;
    const emailToSubmit = this.state.emailToSubmit;
    const passwordToSubmit = this.state.passwordToSubmit;
    const roleToSubmit = this.state.roleToSubmit;

    axios.post('/users', {
      name: usernameToSubmit,
      email: emailToSubmit,
      password: passwordToSubmit,
      role: roleToSubmit
    }).then((result) => {
      console.log(result);
    });

    this.props.history.push('/submitted');
  }
  render() {
    const usernameToSubmit = this.state.usernameToSubmit;
    const emailToSubmit = this.state.emailToSubmit;
    const passwordToSubmit = this.state.passwordToSubmit;
    const roleToSubmit = this.state.roleToSubmit;
    return(
      <div className="container">
        <div className="col-xs-8">
          <div>
            <Form onSubmit={this.onSubmit}>
              <Form.Group controlId="formUserName">
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder="username" name="usernameToSubmit" value={usernameToSubmit} onChange={this.onChange}/>
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email" name="emailToSubmit" value={emailToSubmit} onChange={this.onChange}/>
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="passwordToSubmit" value={passwordToSubmit} onChange={this.onChange}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formRole">
                <Form.Label>Side</Form.Label>
                <Form.Control as="select" name="roleToSubmit" value={roleToSubmit} onChange={this.onChange}>
                  <option>Choose...</option>
                  <option>Blue</option>
                  <option>Yellow</option>
                  <option>None</option>
                </Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>

    );
  }
}
export default withRouter(Signup);
