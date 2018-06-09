import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { setPlayers } from "../actions/game"
import { FormErrors } from "./FormErrors"

class ChoosePlayers extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      Player1: "",
      Player2: "",
      formErrors: { Player1: "", Player2: "" },
      player1HasName: false,
      player2HasName: false,
      differentNames: false,
      formValid: false
    }
  }

  handleSubmit = () => {
    console.log(this.state)
    this.props.setPlayers(this.state.Player1, this.state.Player2)
    this.props.history.push("/game")
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState(
      {
        [name]: value
      },
      () => {
        this.validateField(name, value)
      }
    )
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors
    let player1HasName = this.state.player1HasName
    let player2HasName = this.state.player2HasName
    let differentNames = this.state.differentNames

    switch (fieldName) {
      case "Player1":
        player1HasName = value.length >= 1
        fieldValidationErrors.Player1 = player1HasName
          ? ""
          : "Player 1 must have a name"
        break
      case "Player2":
        player2HasName = value.length >= 1
        differentNames = this.state.Player1 !== this.state.Player2
        if (!player2HasName) {
          fieldValidationErrors.Player2 = "Player 2 must have a name"
        } else if (!differentNames) {
          fieldValidationErrors.Player2 =
            "Player 1 and 2 must have different names"
        } else fieldValidationErrors.Player2 = ""
        break
      default:
        break
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        player1HasName: player1HasName,
        player2HasName: player2HasName,
        differentNames: differentNames
      },
      this.validateForm
    )
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.player1HasName &&
        this.state.player2HasName &&
        this.state.differentNames
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <button type="submit" disabled={!this.state.formValid}>
          Play!
        </button>
      </form>
    )
  }
}

const mapStateToProps = ({ players }) => ({ players })

export default connect (mapStateToProps, { setPlayers })(ChoosePlayers)
