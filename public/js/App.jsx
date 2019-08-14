import React from 'react'
import ReactBootstrap, {Jumbotron, Button, Col, Grid, Panel, FormGroup, ButtonToolbar} from 'react-bootstrap'
import PropTypes from 'prop-types';
import axios from 'axios';

const API_URL = window.location.href;

class App extends React.Component {
  state = {
    question: []
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const url = `${API_URL}question/`;
    axios.get(url).then(response => response.data.data)
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
        <div>
        <ButtonToolbar>
        <Button variant="primary">Primary</Button>
        </ButtonToolbar>
        </div>
        </div>
       </div>
    )
  }
};

export default App
