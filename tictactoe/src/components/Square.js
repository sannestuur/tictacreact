// src/components/Square.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import './Square.css'
import { move } from "../actions/game";

class Square extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }

  handleClick = () => {
    const { x, y, makeMove } = this.props

    makeMove(y, x);
  }

  render() {
    return (
      <div className="Square"
        onClick={this.handleClick}
      />
    )
  }
}


export default connect(null, { makeMove: move})(Square)
