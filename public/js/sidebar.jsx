import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import Dashboard from './dashboard';
import '../css/App.css';

class Sidebar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen});
  }

  closeMenu () {
    this.setState({menuOpen: false});
  }

  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}));
  }

  render () {
    return (
      <div>
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          >
          <Link onClick={() => this.closeMenu()} className="menu-item" to="/">Home</Link>
          <Link onClick={() => this.closeMenu()} className="menu-item" to="/about">About</Link>
          <Link onClick={() => this.closeMenu()} className="menu-item" to="/login">Login</Link>
          <Link onClick={() => this.closeMenu()} className="menu-item" to="/signup">Signup</Link>
        </Menu>
      </div>
    )
  }
}

export default Sidebar;
