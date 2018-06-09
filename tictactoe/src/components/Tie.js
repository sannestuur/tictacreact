import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { createGame } from "../actions/game"

class Tie extends PureComponent {

  playAgain = () => {
    this.props.createGame();
    this.props.history.push("/game")
  }

  quitGame = () => {
    this.props.createGame();
    this.props.history.push("/choose-players")
  }

  render() {
    return (
      <div>
        <h1>It's a tie!</h1>
        <p>Do you want to play against each other again?</p>
          <button className="button" onClick={this.playAgain}>Play again!</button><br/>
          <button className="button" onClick={this.quitGame}>Quit</button>
      </div>
    )
  }
}

export default connect(null, { createGame} )(Tie)
