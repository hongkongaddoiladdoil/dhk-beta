import React from 'react'
import ReactBootstrap, {
  Jumbotron, Button, Col, Grid, Panel, Form, FormGroup, ButtonToolbar,
  ListGroup, Tab, Tabs, Row, Nav, TabContainer, TabContent, TabPane
} from 'react-bootstrap'
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
    /*
    axios.get('/question').then(response => response.data.data)
      .then((data) => {
        this.setState({ question: data })
      })
      */
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
        <TabContainer defaultActiveKey="questions">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item><Nav.Link eventKey="login">Login</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="questions">Questions</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="ask">Ask</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="answer">Answer</Nav.Link></Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <TabContent>
                <TabPane eventKey="login"><p>hi login</p></TabPane>
                <TabPane eventKey="questions"><p>hi question</p></TabPane>
                <TabPane eventKey="ask"><p>hi ask</p></TabPane>
                <TabPane eventKey="answer"><p>hi answer</p></TabPane>
              </TabContent>
            </Col>
          </Row>
        </TabContainer>
      </div>
    )
  }
  
};

export default App
/*
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
    */
