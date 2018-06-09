import React, { PureComponent } from "react"
import { connect } from "react-redux"
import './Player.css'

class Players extends PureComponent {
  render() {
    const { players } = this.props

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

const mapStateToProps = ({ players }) => ({ players })

export default connect(mapStateToProps, null)(Players)
