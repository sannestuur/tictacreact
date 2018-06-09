import React, { PureComponent } from "react"
import { connect } from "react-redux"
import './Turn.css'


class Turn extends PureComponent {

  render() {

    const current = (
      this.props.currentPlayer === "Player_1"
        ? (this.props.players[0].name)
        : (this.props.players[1].name)
    )

    const symbol = (
      this.props.currentPlayer === "Player_1"
        ? 'X'
        : 'O'
    )

    return (
      <div>
        <h1><span className="name">{current}</span> (<span className="symbol">{symbol}</span>), it's your turn</h1>
      </div>
    )
  }
}

const mapStateToProps = ({ currentPlayer, players }) => ({ currentPlayer, players })

export default connect(mapStateToProps)(Turn)
