import { WIN } from "../actions/game"

const initialState = [
  { id: 1, name: "Elger", wins: 0 },
  { id: 2, name: "Sanne", wins: 0 }
]
export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case WIN:
      return payload.currentPlayer === "Player_1"
        ? (payload.players[0].wins += 1)
        : (payload.players[1].wins += 1)
    default:
      return state
  }
}
