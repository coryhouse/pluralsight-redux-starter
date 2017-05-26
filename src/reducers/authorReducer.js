import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action){//state array list of courses,
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
        return action.authors;

    default:
      return state;
  }
}
