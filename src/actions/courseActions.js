import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

//this action does not fire until all data has been successfully returned by API call
export function loadCoursesSuccess(courses){
  return { type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(course){
  return {type: types.CREATE_COURSE_SUCCESS, course};
}
export function updateCourseSuccess(course){
  return {type:types.UPDATE_COURSE_SUCCESS, course}
}
//we want to handle the promise and then dispatch an action when the promise is resolved
export function loadCourses(){
  return function(dispatch){
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCourse(course){
  return function(dispatch, getState) {
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) :
       dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      throw(error);
    });
  };
}
