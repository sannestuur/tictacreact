import React, { PureComponent } from 'react'

export default class ChoosePlayers extends PureComponent {
  state = {}

	handleSubmit = (data) => {
		console.log(data)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>Player 1</label>
					<input type="string" name="Player_1" id="Player_1" value={
						this.state.Player_1 || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label>Player 2</label>
					<input type="string" name="Player_2" id="Player_2" value={
						this.state.Player_2 || ''
					} onChange={ this.handleChange } />
				</div>

				<button type="submit">Play!</button>
			</form>
		)
	}
}
