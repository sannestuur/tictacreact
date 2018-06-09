export const MOVE = 'MOVE'
export const SWITCH = 'SWITCH'
export const WIN = 'WIN'
export const SET = 'SET'
export const UPDATE_WIN = 'UPDATE_WIN'


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

export const updateWins = (currentPlayer, players, board) => ({
  type: UPDATE_WIN,
  payload: {
      currentPlayer,
      players,
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
