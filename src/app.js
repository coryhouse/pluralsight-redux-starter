import React, {PropTypes} from 'react';

class App extends React.Component {
  render() {
  	let world: string = "World";
    return (
      <div>Hello {world}</div>
    );
  }
}

export default App;