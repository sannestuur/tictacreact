import React, { PureComponent } from "react"
import { connect } from "react-redux"

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
      <p>Do you want to play against each other again?</p>
      <button onClick={() => this.props.history.push(`/game`)}>Play again!</button><br/>
      <button onClick={() => this.props.history.push(`/choose-players`)}>Quit</button>
      </div>
    )
  }
}

const mapStateToProps = ({ currentPlayer, players }) => ({ currentPlayer, players })

export default connect(mapStateToProps, null )(Winner)
