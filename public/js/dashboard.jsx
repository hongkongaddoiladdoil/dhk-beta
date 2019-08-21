import React from 'react';
import ReactBootstrap, {Jumbotron, Button, Col, Grid, Panel, Form, FormGroup, ButtonToolbar, Card} from 'react-bootstrap';
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

  renderQuestion(q) {
    const query = "?id=" + q.id;
    return (
      <Link to = {{ pathname: "/qa", search: query }}>
        <Card>
          <Card.Body>
            <Card.Title>{q.user_id}</Card.Title>
            <Card.Text>{q.content}</Card.Text>
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
          {this.state.question.map((q) => (
            this.renderQuestion(q)
          ))}
        </div>
      </div>
    )
  }
}

export default Dashboard
