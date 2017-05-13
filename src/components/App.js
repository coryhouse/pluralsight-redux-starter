//this component handles the App template used on every page
import React, {PropTypes} from 'react';
import Header from './common/Header';

class App extends React.Component {
  render(){//chileren will be passed in through react router

    return (
      <div className = 'container-fluid'>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  chileren: PropTypes.object.inRequired
};

export default App;
