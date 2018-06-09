import { CREATE, MOVE } from "../actions/game"
import {updateBoard} from "../lib/gamelogic"

const initialState = ["", "", "", "", "", "", "", "", ""]

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case CREATE:
      return initialState
    case MOVE:
      return updateBoard(state, payload.index, payload.currentPlayer)
    default:
      return state
  }
}
