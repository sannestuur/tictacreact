export const MOVE = 'MOVE'

export const move = (row, col, currentPlayer) => ({
  type: MOVE,
  payload: {
    row,
    col,
    currentPlayer
  }
})
