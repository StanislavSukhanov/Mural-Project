import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CustomNavbar from './components/CustomNavbar'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CustomNavbar />
        </div>
      </Router>
    );
  }
}

export default App;
