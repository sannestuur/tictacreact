import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import "./Square.css"
import { makeMove } from "../actions/game"

class Square extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired
  }

  handleClick = () => {
    const { x, value, makeMove, currentPlayer, board } = this.props
    if (value === "") {
      makeMove(x, currentPlayer, board)
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

const mapStateToProps = ({ currentPlayer, board }) => ({
  currentPlayer,
  board
})

export default connect(mapStateToProps, {
  makeMove
})(Square)
