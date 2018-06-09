import { SET } from "../actions/game";
import { UPDATE_WIN } from "../actions/game"

const initialState = [
  { id: 1, name: "Elger", wins: 0 },
  { id: 2, name: "Sanne", wins: 0 }
]

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SET:
      const newplayers = [];
      var newplayer1 = Object.assign( {}, state[0])
      newplayer1.name = payload.player1
      var newplayer2 = Object.assign( {}, state[1])
      newplayer2.name = payload.player2
      newplayers.push(newplayer1, newplayer2)
      return newplayers

    // case SET:
    //   const newplayers = state.map((player, index) =>{
    //
    //     var newplayer = Object.assign( {}, state[index])
    //     newplayer.name = payload.player1
    //     return newplayer
    //   })
    //    return newplayers
    // ;

    case UPDATE_WIN:
      return payload.currentPlayer === "Player_1"
        ? (payload.players[0].wins += 1)
        : (payload.players[1].wins += 1)
    default:
      return state
  }
}
