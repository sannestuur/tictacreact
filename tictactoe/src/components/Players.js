import React, { PureComponent } from 'react'
import { connect } from "react-redux"
import './Player.css'

class Players extends PureComponent {
  render() {
    const { players, currentPlayer } = this.props

    const current = (
      this.props.currentPlayer === "Player_1"
        ? (this.props.players[0])
        : (this.props.players[1])
    )

    return (
    <ul>
      <li className="Player">
        <p className="name">{players[0].name}</p>
        <p className="wins">Wins: {players[0].wins}</p>
      </li>
      <li className="Player">
        <p className="name">{players[1].name}</p>
        <p className="wins">Wins: {players[1].wins}</p>
      </li>
    </ul>
    )
  }
}

const mapStateToProps = ({ players, currentPlayer }) => ({ players })

export default connect(mapStateToProps, null)(Players)
