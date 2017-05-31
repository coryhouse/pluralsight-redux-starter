//this component handles the App template used on every page
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends React.Component {
  render(){//chileren will be passed in through react router
console.log("this.props.loading",this.props.loading);
    return (
      <div className = 'container-fluid'>
        <Header
          loading={this.props.loading}
        />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.inRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps (state, ownProps){
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}
export default connect(mapStateToProps)(App);
