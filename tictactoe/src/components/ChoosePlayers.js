import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Redirect, withRouter} from "react-router-dom"
import { setPlayers } from "../actions/game"

class ChoosePlayers extends PureComponent {
  static propTypes = {
    Player1: PropTypes.string.isRequired,
    Player2: PropTypes.string.isRequired
  }

  state = {}

  // prevent automatic form submission behaviour or don't use form tag

  handleSubmit = () => {
    console.log(this.state)
    this.props.setPlayers(this.state.Player1, this.state.Player2)
    this.props.history.push('/game');
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor="Player1">Player 1</label>
          <input
            type="string"
            placeholder="insert name"
            name="Player1"
            id="Player1"
            value={this.state.Player1}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="Player_2">Player 2</label>
          <input
            type="string"
            placeholder="insert name"
            name="Player2"
            id="Player2"
            value={this.state.Player2}
            onChange={this.handleChange}
          />
        </div>
        <div>
        </div>
        <button onClick={this.handleSubmit}>Play!</button>
      </div>
    )
  }
}

const mapStateToProps = ({ players }) => ({ players })

export default connect(mapStateToProps, { setPlayers })(ChoosePlayers)
