import {combineReducers} from 'redux';
import courses from './courseReducer';//choose the property name as courses, in following code , use "courses"

const rootReducer = combineReducers({
  courses//short hand property name
});

export default rootReducer;
