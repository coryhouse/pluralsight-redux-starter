import {combineReducers} from 'redux';
import courses from './courseReducer';//choose the property name as courses, in following code , use "courses"
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,//short hand property name
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
