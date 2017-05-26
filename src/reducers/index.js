import {combineReducers} from 'redux';
import courses from './courseReducer';//choose the property name as courses, in following code , use "courses"
import authors from './authorReducer';

const rootReducer = combineReducers({
  courses,//short hand property name
  authors
});

export default rootReducer;
