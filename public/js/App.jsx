import React from 'react'
import ReactBootstrap, {Jumbotron, Button, Col, Grid, Panel, Form, FormGroup, ButtonToolbar} from 'react-bootstrap'
import PropTypes from 'prop-types';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: [],
      questionToSubmit: '',
      userIdToSubmit: ''
    };
  }
  componentDidMount() {
    axios.get('/question').then(response => response.data.data)
      .then((data) => {
        this.setState({ question: data })
      })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const userIdToSubmit = this.state.userIdToSubmit;
    const questionToSubmit = this.state.questionToSubmit;

    axios.post('/question', { user_id: userIdToSubmit, content: questionToSubmit })
      .then((result) => {
        console.log(result);
      });
  }
  render() {
    const userIdToSubmit = this.state.userIdToSubmit;
    const questionToSubmit = this.state.questionToSubmit;
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
          <br/>
          <div>
            <Form onSubmit={this.onSubmit}>
              <Form.Group>
                <Form.Control type="text" placeholder="User ID" name="userIdToSubmit" value={userIdToSubmit} onChange={this.onChange}/>
                <Form.Label>Question</Form.Label>
                <Form.Control as="textarea" rows="3"
                  name="questionToSubmit"
                  value={questionToSubmit}
                  placeholder = "Question"
                  onChange={this.onChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }
};

export default App
