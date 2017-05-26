import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action){//state array list of courses,
  switch(action.type){
    case types.LOAD_COURSES_SUCCESS:
      debugger;
        return action.course;
    default:
      return state;
  }
}
