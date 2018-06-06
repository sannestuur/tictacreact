// src/components/Square.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import './Square.css'
import { makeMove } from "../actions/game";
import { switchPlayer } from "../actions/game";


class Square extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }

  handleClick = () => {
    const { x, y, value, makeMove, currentPlayer, switchPlayer } = this.props

    if (value===""){makeMove(y, x, currentPlayer); switchPlayer(currentPlayer);}
  }

  render() {
    return (
      <div className="Square"
        onClick={this.handleClick}>{this.props.value}</div>

    )
  }
}

const mapStateToProps = ({ currentPlayer }) => ({ currentPlayer })


export default connect(mapStateToProps, { makeMove, switchPlayer })(Square)
