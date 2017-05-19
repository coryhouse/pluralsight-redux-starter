export default function courseReducer(state = [], action){//state array list of courses,
  switch(action.type){
    case 'CREATE_COURSE' :
      debugger;
      //state.push(action.course); return state; cannot do this because state is immutable
        return [...state,//spread operator
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
}
