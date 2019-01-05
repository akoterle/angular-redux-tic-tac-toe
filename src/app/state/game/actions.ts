import {Action} from "redux";
import * as types from './types';

export const startNewGame = (): Action => ({
  type: types.NEW_GAME
});
