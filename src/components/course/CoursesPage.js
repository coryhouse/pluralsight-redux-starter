import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
//update routes.js to have access to this page; then update Header.js to have course header
class CoursesPage extends React.Component{
  constructor(props, context){
    super(props, context);
  }


  courseRow(course, index){//we map over the list of courses and then call the courseRow function for each course
    return <div key={index}>{course.title}</div>;
  }
  render(){
    debugger;  //we expect the render function to be called after new state occurs
    console.log("IN CoursePage" );
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
      </div>
    );
  }
}

CoursesPage.PropTypes = {
  courses:PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  debugger;
  //we expect that when the course data changes, this mapStateToProps function would receive that new state
  //and end up passing that state as this.props.courses to our component
  return {
    courses: state.courses//this 'courses' is determinted in indexjs in reducer folder
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(courseActions, dispatch)//map all actions to this.props.actions
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
