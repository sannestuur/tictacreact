import React, { Component } from 'react';
import './App.css';

import Player from './components/Player'

const players = [
  { id: 1, name: 'Elger', wins: 4 },
  { id: 2, name: 'Sanne', wins: 0 }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Tic Tac Toe</h1>
        <p> by Sanne Stuur</p>
        <ul>
          {players.map((player, index) => <Player key={index} { ...player } />)}
        </ul>
      </div>
    );
  }
}

export default App;
