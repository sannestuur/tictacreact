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

  renderRow = (row, index) => {
    return (
      <div key={index} className="row">
        {row.map(this.renderSquare(index))}
      </div>
    )
  }

  renderSquare = rowIndex => (value, index) => {
    return (
      <Square
        key={index}
        value={value}
        x={index}
        y={rowIndex}
        />
    )
  }

  render() {
    return (
      <div className="Board">
        {this.props.board.map(this.renderRow)}
      </div>
    )
  }
}

const mapStateToProps = ({ board }) => ({ board })


// Then pass it to connect:
export default connect(mapStateToProps)(Board)
