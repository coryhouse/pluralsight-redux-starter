import React, { Component, ReactPropTypes } from 'react';

class CoursesPage extends Component {
  constructor (props, content) {
    super(props, content);

    this.state = {
      course: { title: '' }
    };
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;

    this.setState({ course });
  }

  onClickSave() {
    alert(`Saving ${this.state.course.title}`);
  }

  render () {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>

        <input type='text'
               onChange={this.onTitleChange}
               value={this.state.course.title} />
        <input type='submit'
               onChange={this.onClickSave}
               value='Save' />
      </div>
    );
  }
}

export default CoursesPage;
