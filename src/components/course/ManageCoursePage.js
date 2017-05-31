import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

class ManageCoursePage extends React.Component {
  constructor(props, context){
    super(props,context);

    this.state ={
      course:Object.assign({}, this.props.course),
      errors:{},
      saving: false
    };
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.course.id != nextProps.course.id) {//react will run this function even no change in props
      //necessary to populate form when existing course is loaded directly
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  updateCourseState(event){
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  saveCourse(event){
    console.log("event", event);
    event.preventDefault();
    this.setState({saving: true});
    debugger;
    this.props.actions.saveCourse(this.state.course)
    .then(() => this.redirect());
  }

  redirect(){
    this.setState({saving: false});
    debugger;
    toastr.success('Course Saved');
    this.context.router.push('/courses');
  }

  render() {
    return(
        <CourseForm
                  allAuthors={this.props.authors}
                  onChange={this.updateCourseState}
                  onSave={this.saveCourse}
                  course={this.state.course}
                  errors={this.state.errors}
                  saving={this.state.saving}
        />
    );
  }
}

ManageCoursePage.propTypes = {
  course:PropTypes.object.isRequired,
  authors:PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired
};
//pull in the React Router context so router is available on this.contet.router.
ManageCoursePage.contextTypes = {
  router : PropTypes.object
};
function getCourseById(courses, id){
  const course = courses.filter(course => course.id ==id);
  if(course) return course[0];//since filter returns an array, grab the first
  return null;
}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id; //from the path ‘／course/：id’

  let course= {id:'', watchHref:'', title:'', authorId:'', length:'', category:''};

  if(courseId && state.courses.length >0){//at least one course exists
    course = getCourseById(state.courses, courseId);
  }

  const authorsFormatedForDropdown = state.authors.map(author => {
    return{
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
  return {
    course: course,
    authors:authorsFormatedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
