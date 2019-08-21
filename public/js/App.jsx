import React from 'react';
import ReactBootstrap, {Jumbotron, Button, Col, Grid, Panel, Form, FormGroup, ButtonToolbar} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './about';
import Signup from './signup';
import Dashboard from './dashboard';
import PostQuestion from './postQuestion';
import Submitted from './submitted';
import EmailSent from './emailSent';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-xs-8">

          <Router>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                  <Link to="/postQuestion">Ask</Link>
                </li>
              </ul>

              <hr />
              <Route exact path="/" component={Dashboard} />
              <Route path="/about" component={About} />
              <Route path="/signup" component={Signup} />
              <Route path="/postQuestion" component={PostQuestion} />
              <Route path="/submitted" component={Submitted} />
              <Route path="/emailSent" component={EmailSent} />
            </div>
          </Router>

        </div>
      </div>
    )
  }
}

export default App
