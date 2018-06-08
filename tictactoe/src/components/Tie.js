import React, { PureComponent } from "react"
  
class Tie extends PureComponent {

  render() {

    return (
      <div>
      <h1>It's a tie!</h1>
      <p>Do you want to play against each other again?</p>
      <button onclick="location.href='/game'">Play again!</button><br/>
      <button onclick="location.href='/choose-players'">Quit</button>
      </div>
    )
  }
}

export default (Tie)
