import { MOVE } from "../actions/game";

const initialState = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case MOVE:
      return state.map((row, rowIndex) => {
        if (rowIndex !== payload.row) return row;

        return row.map((value, colIndex) => {
          if (colIndex !== payload.col) return value;

          switch (value) {
            case "":
              return (payload.currentPlayer === "Player_1" ? 'x' : 'o');
            default:
              return '';
          }
        });
      });

    default:
      return state;
  }
};
