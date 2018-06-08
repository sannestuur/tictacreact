import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Square from './Square'
import './Board.css'
import { connect } from 'react-redux'


export class Board extends PureComponent {
  static propTypes = {
    board: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.string)
    ).isRequired
  }

  renderSquare = (value, index) => {
    return (
      <Square
        key={index}
        value={value}
        x={index}
        />
    )
  }

  render() {
    // if(this.props.gamefinished) -> redirect
    return (
      <div className="Board">
        {this.props.board.map(this.renderSquare)}
      </div>
    )
  }
}

const mapStateToProps = ({ board }) => ({ board })

export default connect(mapStateToProps)(Board)
