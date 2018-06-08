export const MOVE = 'MOVE'
export const SWITCH = 'SWITCH'
export const CHECK = 'CHECK'
export const SET = 'SET'

export const makeMove = (index, currentPlayer) => ({
  type: MOVE,
  payload: {
    index,
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

export const setPlayers = (players) => ({
  type: SET,
  payload: {
      players
  }
})
