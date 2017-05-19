import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
//update routes.js to have access to this page; then update Header.js to have course header
class CoursesPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state={
      course:{title:''}
    }
    //bind two functions to the 'this' of the CoursePage component

   this.onTitleChange = this.onTitleChange.bind(this);
   this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event){
    console.log(" onTitleChange function in CoursesPage");
    const course = this.state.course;
    course.title =event.target.value;//pull value out of event off of target, then set to title
    this.setState({course:course});//update the state

  }

  onClickSave(){
   console.log("onClickSave function in CoursesPage " + this.state.course.title);
   //alert(`Saving ${this.state.course.title}`);
   //alert('Saving '+this.state.course.title);
  this.props.createCourse(this.state.course);

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
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />

          <input
            type="submit"
            onClick={this.onClickSave}
            value="Save" />
      </div>
    );
  }
}

CoursesPage.PropTypes = {
  courses:PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired
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
    createCourse: course => dispatch(courseActions.createCourse(course))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
