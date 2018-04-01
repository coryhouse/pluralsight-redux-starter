import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render () {
    return (
      <div className='container-fluid'>
        <p>Header here...</p>
        { this.props.children }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;

// function mapStateToProps(state, ownProps) {
//   return {
//     loading: state.ajaxCallIsInProgress > 0
//   };
// }
//
// export default connect(mapStateToProps)(App);
