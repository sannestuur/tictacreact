import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

class Winner extends PureComponent {

  render() {

    const winner = (
      this.props.currentPlayer === "Player_1"
        ? (this.props.players[0].name)
        : (this.props.players[1].name)
    )

    return (
      <div>
      <h1>{winner} has won!</h1>
      <button onclick="location.href='/game'">Play again!</button><br/>
      <button onclick="location.href='/game'">Quit</button>
      </div>
    )
  }
}

const mapStateToProps = ({ currentPlayer, players }) => ({ currentPlayer, players })

export default connect(mapStateToProps, null )(Winner)
