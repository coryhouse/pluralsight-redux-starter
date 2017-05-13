import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

//stateless function
//to use the header, import it in app.js, and put <Header/> at where the header is wanted
const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {"|"}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {"|"}
      <Link to="/about" activeClassName="active">About</Link>
    </nav>
  );
};

export default Header;
