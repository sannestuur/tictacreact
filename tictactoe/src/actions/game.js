export const MOVE = 'MOVE'
export const SWITCH = 'SWITCH'
export const WIN = 'WIN'
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

export const updateWins = (currentPlayer, players) => ({
  type: WIN,
  payload: {
      currentPlayer,
      players
  }
})

export const setPlayers = (players) => ({
  type: SET,
  payload: {
      players
  }
})
