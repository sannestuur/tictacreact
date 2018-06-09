import React, { PureComponent } from "react"

class Tie extends PureComponent {
  render() {
    return (
      <div>
        <h1>It's a tie!</h1>
        <p>Do you want to play against each other again?</p>
        <button onClick={() => this.props.history.push(`/game`)}>
          Play again!
        </button>
        <br />
        <button onClick={() => this.props.history.push(`/choose-players`)}>
          Quit
        </button>
      </div>
    )
  }
}

export default Tie
