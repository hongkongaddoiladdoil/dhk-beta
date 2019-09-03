import React from 'react';
import ReactBootstrap, { Jumbotron, Button, Col, Grid, Panel, Form, FormGroup, ButtonToolbar, Card} from 'react-bootstrap';
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

  renderQuestion(q) {
    const query = "?id=" + q.id;
    return (
      <Link to={{ pathname: "/qa", search: query }}>
        <Card>
          <Card.Body>
            <h5 className="card-title">User: {q.user_id} Q: {q.content}</h5>
          </Card.Body>
        </Card>
      </Link>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="col-xs-8">
          <h1>List of Question</h1>
          {this.state.questions.map((q) => (
            this.renderQuestion(q)
          ))}
        </div>
      </div>
    )
  }
}

export default Dashboard
