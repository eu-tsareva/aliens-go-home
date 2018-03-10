import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{ this.props.message }</h1>
        </header>
      </div>
    );
  }
}

App.propTypes = {
  message: PropTypes.string.isRequired,
}

export default App;
