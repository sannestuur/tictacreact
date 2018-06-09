import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import "./Square.css"
import { makeMove } from "../actions/game"
import { switchPlayer } from "../actions/game"
import { updateWins } from "../actions/game"

class Square extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired
  }

  checkWin = (currentPlayer, players, board) => {

    if (
      ((board[0] === board[1]) === board[2] && board[0] !== "") ||
      ((board[3] === board[4]) === board[5] && board[3] !== "") ||
      ((board[6] === board[7]) === board[8] && board[6] !== "") ||
      ((board[0] === board[3]) === board[6] && board[0] !== "") ||
      ((board[1] === board[4]) === board[7] && board[1] !== "") ||
      ((board[2] === board[5]) === board[8] && board[2] !== "") ||
      ((board[0] === board[4]) === board[8] && board[0] !== "") ||
      ((board[2] === board[4]) === board[6] && board[2] !== "")
    ) {
      updateWins(currentPlayer, players)
      }
      // return <Redirect to="/winner" />
      else if (!board.includes("")) {return <Redirect to="/tie" />}
     else switchPlayer(currentPlayer)
  }

  handleClick = () => {
    const { x, value, makeMove, currentPlayer, switchPlayer, updateWins, board, players} = this.props

    if (value === "") {
      makeMove(x, currentPlayer)
      // updateWins(currentPlayer, players, board)
      switchPlayer(currentPlayer)
    }
  }

  render() {
    return (
      <div className="Square" onClick={this.handleClick}>
        {this.props.value}
      </div>
    )
  }
}

const mapStateToProps = ({ currentPlayer, board, players }) => ({ currentPlayer, board, players })

export default connect(mapStateToProps, { makeMove, switchPlayer, updateWins })(Square)
