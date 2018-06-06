export const MOVE = 'MOVE'
export const SWITCH = 'SWITCH'

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
