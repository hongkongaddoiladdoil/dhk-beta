import React from 'react';
import ReactBootstrap, {Jumbotron, Button, Col, Grid, Panel, Form, FormGroup, ButtonToolbar} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import axios from 'axios';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: [],
    };
  }
  componentDidMount() {
    axios.get('/question').then(response => response.data.data)
      .then((data) => {
        this.setState({ question: data })
      })
  }
  render() {
    return (
      <div className="container">
        <div className="col-xs-8">
          <h1>List of Question</h1>
          {this.state.question.map((question) => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">User: {question.user_id} Q: {question.content}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Dashboard
