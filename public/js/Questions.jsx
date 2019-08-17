import React from 'react'
import ReactBootstrap, {
  Card, Button
} from 'react-bootstrap'
import PropTypes from 'prop-types';
import axios from 'axios';

function Answer(props) {
  return (
    <card>
      <Card.Body>
        <Card.Title>{props.userName}</Card.Title>
        <Card.Text>{props.context}</Card.Text>
      </Card.Body>
    </card>
  );
}

function Answers(props) {
  return (
    <div className="col-xs-8">
      <h1>Answers of q{props.questionId}</h1>
      {props.answers.map((a) => (
        <Answer
          userName={a.userName}
          context={a.context}
        />
      ))}
    </div>
  );
}

function Question(props) {
  return (
    <Card>
      <Card.Body onClick={() => props.onClick(props.id)} >
        <Card.Title>{props.userName}</Card.Title>
        <Card.Text>{props.context}</Card.Text>
      </Card.Body>
      {/*<Card.Footer></Card.Footer>*/}
    </Card>
  );
}

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      displayAnswer: false,
      answers: {
        questionId: null,
        answer: []
      },
    };
  }
  componentDidMount() {
    //todo: get question list
    /*
    axios.get('/question').then(response => response.data.data)
      .then((data) => {
        this.setState({ question: data })
      })*/
    this.setState({
      questions: [{
          id: 0,
          context: 'q0',
          userName: 'Peter'
        }, {
          id: 1,
          context: 'q1',
          userName: 'Paul'
        }]
    })
  }

  renderQuestion(q) {
    return (
      <Question
        id={q.id}
        context={q.context}
        userName={q.userName}
        onClick={() => this.handleClickQuestion(q.id)}
      />
    );
  }

  handleClickQuestion(questionId) {
    //todo: get answer list
    this.setState({
      displayAnswer: true,
      answers:  {
        questionId: questionId,
        answer: [{
          userName: 'mary',
          context: 'a0'
        }, {
          userName: 'alice',
          context: 'a1'
        }
        ]
      }
    });
  }

  handleClickBackToQuestionList(page) {
    //todo: handle page number
    this.setState({
      displayAnswer: false
    });
  }
  
  render() {
    if (this.state.displayAnswer) {
      return (
        <div className="col-xs-8">
          <Answers
            questionId={this.state.answers.questionId}
            answers={this.state.answers.answer}
          />
          <Button variant="primary" onClick={() => this.handleClickBackToQuestionList(-1)}>
            Back to Questions List
          </Button>
        </div>
      )
    } else {
      return (
        <div className="col-xs-8">
          <h1>List of Question</h1>
          {this.state.questions.map((q) => (
            this.renderQuestion(q)
          ))}
        </div>
      )
    }
  }
};

export default Questions
