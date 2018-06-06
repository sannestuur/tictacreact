export const MOVE = 'MOVE'

export const move = (row, col) => ({
  type: MOVE,
  payload: {
    row,
    col
  }
})
