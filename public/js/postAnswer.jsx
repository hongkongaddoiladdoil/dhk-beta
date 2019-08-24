import React from 'react';
import ReactBootstrap, {Jumbotron, Button, Col, Grid, Panel, Form, Card} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import axios from 'axios';

class PostAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userIdToSubmit: 3,  //todo
      answerToSubmit: '',
      currentQuestionIndex: 0,
      questions: []
    };
  }

  componentDidMount() {
    //todo: fetch question list
    var list = [];
    for (var i = 0; i < 5; i++) {
      const q = {
        id: i,
        userName: 'user' + i,
        content: 'q' + i
      }
      list.push(q);
    }
    this.setState({ questions: list });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    //todo: submit
    console.log("submit for q" + this.state.questions[this.state.currentQuestionIndex].id);
    console.log(this.state.answerToSubmit);
    /*
    axios.post('/question', { user_id: userIdToSubmit, content: this.state.questionToSubmit })
      .then((result) => {
        console.log(result);
      });
    */
    this.props.history.push('/submitted');
  }

  handleClickNextQuestion = (e) => {
    const nextQId = (this.state.currentQuestionIndex+1) % this.state.questions.length;
    this.setState({ currentQuestionIndex: nextQId });
  }

  renderQuestion(index) {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{this.state.questions[index].userName}</Card.Title>
          <Card.Text>{this.state.questions[index].content}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  render() {
    const qId = this.state.currentQuestionIndex % this.state.questions.length;
    if (this.state.questions.length) {
      return (
        <div>
          {this.renderQuestion(qId)}
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="formAnswer">
              <Form.Control type="text" placeholder="Your Answer" name="answerToSubmit" value={this.state.answerToSubmit} onChange={this.onChange} />
            </Form.Group>
            <Button variant="secondary" type="submit">Submit</Button>
          </Form>
          <Button variant="secondary" onClick={this.handleClickNextQuestion}>Next</Button>
        </div>
      );  
    } else {
      return (
        <div>Sorry, please come back and answer at ...</div>
      );
    }
  }
}

export default withRouter(PostAnswer);
