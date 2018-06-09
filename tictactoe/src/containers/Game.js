import React, { PureComponent } from "react"
import Players from "../components/Players"
import Board from "../components/Board"

export default class Game extends PureComponent {
  render() {
    return (
      <div>
        <Board history={this.props.history} />
        <Players />
      </div>
    )
  }
}
