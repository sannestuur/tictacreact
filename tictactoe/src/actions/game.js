export const MOVE = 'MOVE'
export const SWITCH = 'SWITCH'
export const CHECK = 'CHECK'
export const SET = 'SET'

export const makeMove = (row, col, currentPlayer) => ({
  type: MOVE,
  payload: {
    row,
    col,
    currentPlayer
  }
})

export const switchPlayer = (currentPlayer) => ({
  type: SWITCH,
  payload: {
    currentPlayer
  }
})

export const checkWin = (board) => ({
  type: CHECK,
  payload: {
      board
  }
})

export const setPlayers = (player1_name, player2_name) => ({
  type: SET,
  payload: {
      player1_name,
      player2_name
  }
})
