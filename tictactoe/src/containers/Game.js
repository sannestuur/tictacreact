import React, { PureComponent } from 'react'
import Player from '../components/Player'
import Board from '../components/Board'

const players = [
  { id: 1, name: 'Elger', wins: 4 },
  { id: 2, name: 'Sanne', wins: 0 }
]

export default class Game extends PureComponent {
  render() {

    return (
      <div>
        <Board/>
        <ul>
          {players.map((player, index) => <Player key={index} { ...player } />)}
        </ul>
      </div>
    )
  }
}
