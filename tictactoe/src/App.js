import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';

import Game from './containers/Game'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1 className="App-title">Tic Tac Toe</h1>
          <p> by Sanne Stuur</p>
          <Route exact path="/game" component={Game} />
          <Route exact path="/" render={ () => <Redirect to="/game" /> } />
        </div>
      </Router>
    );
  }
}

export default App;
