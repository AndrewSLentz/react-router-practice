import React, { Component } from 'react';
import {Link} from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul style={{listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'space-around'}} className="Nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/stores">Stores</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
