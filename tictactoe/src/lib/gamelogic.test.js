import { checkWin, checkTie } from './gamelogic'

  describe('checkWin', () => {
    const empty = ["", "", "", "", "", "", "", "", ""]
    const row = ["o", "", "", "x", "x", "x", "o", "", ""]
    const col = ["x", "x", "o", "", "x", "o", "", "", "o"]
    const diag = ["x", "x", "o", "", "x", "o", "o", "", "x"]
    const tie = ["x", "o", "x", "o", "x", "x", "o", "x", "o"]

    it('returns true if rows, cols or diagonals are identical', () => {
      expect(checkWin(row)).toBe(true)
      expect(checkWin(col)).toBe(true)
      expect(checkWin(diag)).toBe(true)
    })

    it('returns false if rows, cols or diagonals are identical', () => {
      expect(checkWin(tie)).toBe(false)
    })

    it('returns false if the board is empty', () => {
      expect(checkWin(empty)).toBe(false)
    })
  })

  describe('checkTie', () => {
    const empty = ["", "", "", "", "", "", "", "", ""]
    const row = ["o", "", "", "x", "x", "x", "o", "", ""]
    const col = ["x", "x", "o", "", "x", "o", "", "", "o"]
    const diag = ["x", "x", "o", "", "x", "o", "o", "", "x"]
    const tie = ["x", "o", "x", "o", "x", "x", "o", "x", "o"]

    it('returns false if there is a win', () => {
      expect(checkTie(row)).toBe(false)
      expect(checkTie(col)).toBe(false)
      expect(checkTie(diag)).toBe(false)
    })

    it('returns false if no rows, cols or diagonals are identical', () => {
      expect(checkTie(tie)).toBe(true)
    })

    it('returns false if the board is empty', () => {
      expect(checkTie(empty)).toBe(false)
    })
  })
