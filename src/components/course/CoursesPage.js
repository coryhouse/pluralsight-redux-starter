import React,{PropTypes} from 'react';
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
   alert(`Saving ${this.state.course.title}`);
  //  alert('Saving '+this.state.course.title);

  }

  render(){
    console.log("IN CoursePage" );
    return (
      <div>
        <h1>Courses</h1>
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

export default CoursesPage;
