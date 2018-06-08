import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { setPlayers } from "../actions/game"

class ChoosePlayers extends PureComponent {
  state = {}


  handleSubmit = data => {
    this.props.setPlayers(data.Player_1, data.Player_2);
    return <Redirect to="/game" />
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value || " "
    })
  }


  render() {

    return (
      <form onSubmit={this.handleSubmit}
        initialValues={this.props.players}>
        <div>
          <label htmlFor="Player_1">Player 1</label>
          <input
            type="string"
            placeholder="insert name"
            name="Player_1"
            id="Player_1"
            value={this.state.Player_1 || this.props.players[0].name || ""}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="Player_2">Player 2</label>
          <input
            type="string"
						placeholder="insert name"
            name="Player_2"
            id="Player_2"
            value={this.state.Player_2 || this.props.players[1].name || ""}
            onChange={this.handleChange}
          />
        </div>

        <button type="submit">Play!</button>
      </form>
    )
  }
}

const mapStateToProps = ({ players }) => ({ players })

export default connect(mapStateToProps, { setPlayers })(ChoosePlayers)
