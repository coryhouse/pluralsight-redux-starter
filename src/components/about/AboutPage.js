import React from 'react';

class AboutPage extends React.Component {//can use stateless function as well, but class works better with hot reloading
  render(){
    return (
      <div className = 'jumbotron'>
        <h1>About</h1>
        <p>This application uses React, Redux, React Router and a variety of other libries. </p>
      </div>
    );
  }
}
export default AboutPage;
