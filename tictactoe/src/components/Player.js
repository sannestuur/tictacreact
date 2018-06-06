// src/components/Player.js

import React, { PureComponent } from 'react'
import './Player.css'

export default class Player extends PureComponent {
  render() {
    const { name, wins } = this.props

    return (
      <li className="Player">
        <p className="name">{name}</p>
        <p className="wins">Wins: {wins}</p>
      </li>
    )
  }
}

//add symbol to name
