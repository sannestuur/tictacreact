export const MOVE = "MOVE"
export const SET = "SET"

export const makeMove = (index, currentPlayer, board) => ({
  type: MOVE,
  payload: {
    index,
    currentPlayer,
    board
  }
})

export const setPlayers = (player1, player2) => ({
  type: SET,
  payload: {
    player1,
    player2
  }
})
