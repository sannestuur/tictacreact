import { MOVE } from "../actions/game";

const initialState = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case MOVE:
      return state.map((row, rowIndex) => {
        if (rowIndex !== payload.row) return row;

        return row.map((value, colIndex) => {
          if (colIndex !== payload.col) return value;

          switch (value) {
            case 0:
              return 1;
            case 1:
              return 2;
            default:
              return 0;
          }
        });
      });

    default:
      return state;
  }
};
