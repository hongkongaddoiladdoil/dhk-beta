//import React from 'react'
import React, { Component } from 'react'
import ReactBootstrap, {
  Card, Button
} from 'react-bootstrap'
import PropTypes from 'prop-types'
import axios from 'axios'
import queryString from 'query-string'

class Qa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {
        userName: null,
        content: ''
      },
      answers: []
    };
  }
  componentDidMount() {
    const values = queryString.parse(this.props.location.search)
    //todo: get question
    /*
    axios.get('/question').then(response => response.data.data)
      .then((data) => {
        this.setState({ question: data })
      })*/
    this.setState({
      question: {
        userName: 'ken',
        content: "hiiiiiii"
      }
    })

    //todo: get answers
    this.setState({
      answers: [{
          userName: 'mary',
          content: 'a0'
        }, {
          userName: 'alice',
          content: 'a1'
        }]
    })
  }

  handleClickQuestion(questionId) {
    //todo: get answer list
    this.setState({
      displayAnswer: true,
      answers:  {
        questionId: questionId,
        answer: [{
          userName: 'mary',
          content: 'a0'
        }, {
          userName: 'alice',
          content: 'a1'
        }
        ]
      }
    });
  }

  renderQuestion(q) {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{q.userName}</Card.Title>
          <Card.Text>{q.content}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  renderAnswer(a) {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{a.userName}</Card.Title>
          <Card.Text>{a.content}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  handleClickGoBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="col-xs-8">
        {this.renderQuestion(this.state.question)}
        {this.state.answers.map((a) => (
          this.renderAnswer(a)
        ))}
        <Button variant="secondary" onClick={() => this.handleClickGoBack()}>
          Back to Questions List
        </Button>
      </div>
    )
  }
};

export default Qa
