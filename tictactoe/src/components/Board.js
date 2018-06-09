import React, { PureComponent } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import Square from "./Square"
import "./Board.css"
import { checkWin, checkTie } from "../lib/gamelogic"

export class Board extends PureComponent {
  static propTypes = {
    board: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  componentWillMount() {
    if (
      this.props.players[0].name === "" ||
      this.props.players[1].name === ""
    ) {
      this.props.history.push("/choose-players")
    }
  }

  renderSquare = (value, index) => {
    return (
      <Square
        key={index}
        value={value}
        x={index}
        history={this.props.history}
      />
    )
  }

  render() {
    const { gameWon, gameTie } = this.props

    if (gameWon) {
      this.props.history.push("/winner")
    }

    if (gameTie) {
      this.props.history.push("/tie")
    }

    return (
      <div className="Board">{this.props.board.map(this.renderSquare)}</div>
    )
  }
}

const mapStateToProps = ({ board, currentPlayer, players }) => ({
  board,
  currentPlayer,
  players,
  gameWon: checkWin(board),
  gameTie: checkTie(board) && !checkWin(board)
})

export default connect(mapStateToProps)(Board)
