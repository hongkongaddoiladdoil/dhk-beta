import React from 'react';
import ReactBootstrap, {Jumbotron, Button, Col, Grid, Panel, Form, FormGroup, ButtonToolbar} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sidebar from './sidebar';
import About from './about';
import Signup from './signup';
import Login from './login';
import Dashboard from './dashboard';
import PostQuestion from './postQuestion';
import Submitted from './submitted';
import EmailSent from './emailSent';
import Logout from './logout';
import Qa from './qa';
import PostAnswer from './postAnswer';
import '../css/App.css';

class App extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <Router>
          <Sidebar />
          <div className="container">
            <div className="col-xs-8">
              <Route exact path="/" component={Dashboard} />
              <Route path="/about" component={About} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/postQuestion" component={PostQuestion} />
              <Route path="/submitted" component={Submitted} />
              <Route path="/emailSent" component={EmailSent} />
              <Route path="/logout" component={Logout} />
              <Route path="/qa" component={Qa} />
              <Route path="/postAnswer" component={PostAnswer} />
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
