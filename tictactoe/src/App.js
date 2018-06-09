import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';

import Game from './containers/Game'
import ChoosePlayers from './components/ChoosePlayers'
import Winner from './components/Winner'
import Tie from './components/Tie'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1 className="App-title">Tic Tac Toe</h1>
          <p className="author">by Sanne Stuur</p>
          <div className="content">
          <Route exact path="/game" component={Game} />
          <Route exact path="/choose-players" component={ChoosePlayers} />
          <Route exact path="/winner" component={Winner} />
          <Route exact path="/tie" component={Tie} />
          <Route exact path="/" render={ () => <Redirect to="/game" /> } />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
