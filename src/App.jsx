import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CustomNavbar from './components/CustomNavbar'
import Home from './components/Home'
import About from './components/About'
import Pricing from './components/Pricing'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CustomNavbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/pricing" component={Pricing} />
        </div>
      </Router>
    );
  }
}

export default App;
