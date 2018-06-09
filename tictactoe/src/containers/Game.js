import React, { PureComponent } from "react"
import Players from "../components/Players"
import Board from "../components/Board"
import Turn from "../components/Turn"


export default class Game extends PureComponent {
  render() {
    return (
      <div>
        <Turn />
        <Board history={this.props.history} />
        <Players />
      </div>
    )
  }
}
