import {initialState, rootReducer} from './reducers'
import * as actions from "./actions";


describe('Game', () => {

  it('when start new game board is blank', () => {

    const state = {
      board: {
        0: ['X', 'X', ''],
        1: ['', 'O', ''],
        2: ['O', '', '']
      },
      won: undefined,
      wonLine: undefined,
      draw: false,
      turn: 0

    };

    const expectedState = initialState;

    const action = actions.startNewGame();
    const gotState = rootReducer(state, action);

    expect(gotState).toBe(expectedState)
  });

});
