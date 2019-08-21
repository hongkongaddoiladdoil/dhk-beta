import React from 'react';
import ReactBootstrap, {Jumbotron, Button, Col, Grid, Panel, Form, FormGroup, ButtonToolbar, Row, Nav} from 'react-bootstrap';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import About from './about';
import Signup from './signup';
import Dashboard from './dashboard';
import PostQuestion from './postQuestion';
import Submitted from './submitted';
import EmailSent from './emailSent';
import Qa from './qa';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-xs-8">

          <Router>
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <NavLink to="/"><Nav.Item>Home</Nav.Item></NavLink>
                  <NavLink to="/about"><Nav.Item>About</Nav.Item></NavLink>
                  <NavLink to="/signup"><Nav.Item>Sign Up</Nav.Item></NavLink>
                  <NavLink to="/postQuestion"><Nav.Item>Ask</Nav.Item></NavLink>
                </Nav>
              </Col>
              <Col sm={9}>
                <Route exact path="/" component={Dashboard} />
                <Route path="/about" component={About} />
                <Route path="/signup" component={Signup} />
                <Route path="/postQuestion" component={PostQuestion} />
                <Route path="/submitted" component={Submitted} />
                <Route path="/emailSent" component={EmailSent} />
                <Route path="/qa" component={Qa} />
              </Col>
            </Row>
          </Router>
        </div>
      </div>
    )
  }
}

export default App
