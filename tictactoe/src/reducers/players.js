import { SET } from "../actions/game";
import { WIN } from "../actions/game"

const initialState = [
  { id: 1, name: "Elger", wins: 0 },
  { id: 2, name: "Sanne", wins: 0 }
]
export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SET:
      return
      state.players[0].name=  payload.player1_name,
      state.players[1].name= payload.player2_name
    ;
    case WIN:
      return payload.currentPlayer === "Player_1"
        ? (payload.players[0].wins += 1)
        : (payload.players[1].wins += 1)
    default:
      return state
  }
}
