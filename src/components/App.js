import React, { Component } from 'react';
import Sidebar from './sidebar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div id="root-container">
        <Sidebar />
      </div>
    );
  }
}

export default App;
