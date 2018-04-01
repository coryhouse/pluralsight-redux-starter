import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  render () {
    return (
      <div className='jumbotron'>
        <h1>Pluralsight Administration</h1>
        <p>React, Redux and React&hyphen;Router in ES6 for ultra&hyphen;responsive web apps.</p>
        <Link to='about' className='btn btn-primary btn-lg'>Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
