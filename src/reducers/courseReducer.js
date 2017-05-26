import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action){//state array list of courses,
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
        return action.courses;

    default:
      return state;
  }
}
