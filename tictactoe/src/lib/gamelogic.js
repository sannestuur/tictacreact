export const updateBoard = (board, indexMove, currentPlayer) => {
  return board.map((valueBoard, indexBoard) => {
    if (indexBoard !== indexMove) return valueBoard

    switch (valueBoard) {
      case "":
        return currentPlayer === "Player_1" ? "x" : "o"
      default:
        return ""
    }
  })
}

export const checkWin = board => {
  return (
    (board[0] === board[1] && board[1] === board[2] && board[0] !== "") ||
    (board[3] === board[4] && board[4] === board[5] && board[3] !== "") ||
    (board[6] === board[7] && board[7] === board[8] && board[6] !== "") ||
    (board[0] === board[3] && board[3] === board[6] && board[0] !== "") ||
    (board[1] === board[4] && board[4] === board[7] && board[1] !== "") ||
    (board[2] === board[5] && board[5] === board[8] && board[2] !== "") ||
    (board[0] === board[4] && board[4] === board[8] && board[0] !== "") ||
    (board[2] === board[4] && board[4] === board[6] && board[2] !== "")
  )
}

export const checkTie = board => {
  return !board.includes("")
}
