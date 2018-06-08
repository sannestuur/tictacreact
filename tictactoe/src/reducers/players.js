import { SET } from "../actions/game";

const initialState = [
{ id: 1, name: 'Elger', wins: 0 },
{ id: 2, name: 'Sanne', wins: 0 }
]
export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SET:
      return
      state.players[0].name=  payload.player1_name,
      state.players[1].name= payload.player2_name
    ;
    default:
      return state;
  }
}
