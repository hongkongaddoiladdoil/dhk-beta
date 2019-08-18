import React from 'react';
import ReactBootstrap, {Jumbotron, Button, Col, Grid, Panel, Form, FormGroup, ButtonToolbar} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import axios from 'axios';

class PostQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionToSubmit: '',
      userIdToSubmit: ''
    };
  }
  componentDidMount() {
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
      this.props.history.push('/submitted');
  }
  render() {
    const userIdToSubmit = this.state.userIdToSubmit;
    const questionToSubmit = this.state.questionToSubmit;
    return (
      <div className="container">
        <div className="col-xs-8">
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
}

export default withRouter(PostQuestion);
