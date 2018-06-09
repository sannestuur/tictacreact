import { SET } from "../actions/game"
import { MOVE } from "../actions/game"
import { updateBoard, checkWin } from "../lib/gamelogic"

const initialState = [
  { id: 1, name: "", wins: 0 },
  { id: 2, name: "", wins: 0 }
]

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SET:
      const newplayers = []
      var newplayer1 = Object.assign({}, state[0])
      newplayer1.name = payload.player1
      newplayer1.wins = 0
      var newplayer2 = Object.assign({}, state[1])
      newplayer2.name = payload.player2
      newplayer2.wins = 0
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

    case MOVE:
      const newBoard = updateBoard(
        payload.board,
        payload.index,
        payload.currentPlayer
      )
      if (checkWin(newBoard)) {
        const newScore = []
        var player1score = Object.assign({}, state[0])
        var player2score = Object.assign({}, state[1])
        payload.currentPlayer === "Player_1"
          ? (player1score.wins += 1)
          : (player2score.wins += 1)
        newScore.push(player1score, player2score)
        return newScore
      } else return state
    default:
      return state
  }
}
