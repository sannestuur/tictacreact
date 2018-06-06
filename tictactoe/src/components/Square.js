// src/components/Square.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import './Square.css'
import { move } from "../actions/game";

class Square extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }

  handleClick = () => {
    const { x, y, value, makeMove, currentPlayer } = this.props

    if (value===""){makeMove(y, x, currentPlayer);}
  }

  render() {
    return (
      <div className="Square"
        onClick={this.handleClick}>{this.props.value}</div>

    )
  }
}

const mapStateToProps = ({ currentPlayer }) => ({ currentPlayer })


export default connect(mapStateToProps, { makeMove: move})(Square)
