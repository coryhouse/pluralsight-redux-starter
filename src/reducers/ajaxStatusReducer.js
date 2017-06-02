import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndInSuccess(type){
  return type.substring(type.length - 8) == "_SUCCESS";
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
  if(action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if(action.type == types.AJAX_CALL_ERROR ||
    actionTypeEndInSuccess(action.type)){
      debugger;
    return state - 1;
  }

  return state;
}
