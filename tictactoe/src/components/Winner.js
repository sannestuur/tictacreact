import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { createGame } from "../actions/game"

class Winner extends PureComponent {

    playAgain = () => {
      this.props.createGame();
      this.props.history.push("/game")
    }

    quitGame = () => {
      this.props.createGame();
      this.props.history.push("/choose-players")
    }

  render() {

    const winner = (
      this.props.currentPlayer === "Player_1"
        ? (this.props.players[1].name)
        : (this.props.players[0].name)
    )

    return (
      <div>
      <h1>{winner} has won!</h1>
      <p>Do you want to play against each other again?</p>
      <button className="button" onClick={this.playAgain}>Play again!</button><br/>
      <button className="button" onClick={this.quitGame}>Quit</button>
      </div>
    )
  }
}

const mapStateToProps = ({ currentPlayer, players }) => ({ currentPlayer, players })

export default connect(mapStateToProps, { createGame} )(Winner)
