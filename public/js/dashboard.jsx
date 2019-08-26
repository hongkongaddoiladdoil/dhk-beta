import React from 'react';
import ReactBootstrap, {Jumbotron, Button, Col, Grid, Panel, Form, FormGroup, ButtonToolbar} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import feathersClient from './feathers';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }

  componentDidMount(){
    this.fetchFromRemote()
    feathersClient.service('questions').on('created',()=>this.fetchFromRemote());
  }

  fetchFromRemote =()=>feathersClient.service('questions').find({
    query: {
      $sort: {
        id: -1 // sort them by price descending
      }
    }
  }).then(
    res=>this.setState({questions:res.data})
  )
  render() {
    return (
      <div className="container">
        <div className="col-xs-8">
          <h1>List of Question</h1>
          {this.state.questions.map((questions) => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">User: {questions.user_id} Q: {questions.content}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Dashboard
