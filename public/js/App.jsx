import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'
import PropTypes from 'prop-types';

// function App() (
//   <div>
//   <Button bsStyle='primary' bsSize='large'>TEST</Button>
//   </div>
// )
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
};

export default App
