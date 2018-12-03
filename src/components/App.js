import React, { Component } from 'react';
import Sidebar from './sidebar';
import Home from './home';

import './App.css';

class App extends Component {
  render() {
    return (
      <div id="root-container">
        <Sidebar />
        
        <main>
          <Home />
        </main>
      </div>
    );
  }
}

export default App;
