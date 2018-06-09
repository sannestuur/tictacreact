import { MOVE } from "../actions/game"

const initialState = "Player_1"

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case MOVE:
      return state === "Player_1" ? "Player_2" : "Player_1"
    default:
      return state
  }
}
