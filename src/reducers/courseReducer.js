import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action){//state array list of courses,
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
        return action.courses;

    case types.CREATE_COURSE_SUCCESS:
      return [
          ...state,//spread operator, explode all the value inside state array, aka copy of existing array of courses
          Object.assign({}, action.course)
      ];

    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id != action.course.id), //get courses except for the course that is being updated
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}
