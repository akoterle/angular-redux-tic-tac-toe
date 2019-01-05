import {Action} from "redux";
import {IAppState} from "../model";
import {startNewGame} from './actions';
import * as types from "./types";


export const initialState = {
  board: {
    0: ['', '', ''],
    1: ['', '', ''],
    2: ['', '', '']
  },
  won: undefined,
  wonLine: undefined,
  draw: false,
  turn: 0
};

export const rootReducer = (state: IAppState = initialState, action: Action)  =>
{
  switch (action.type) {
    case types.NEW_GAME:
          return initialState;
    default:
      return state
  }

};
