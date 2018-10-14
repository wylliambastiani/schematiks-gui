import React, { Component } from 'react';
import ServerList from './components/menu/ServerList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div id="root-container">
        <ServerList
          pageWrapId={"main-content-wrapper"}
          outerContainerId={"root-container"}>

        </ServerList>

        <main id="main-content-wrapper">

        </main>
      </div>
    );
  }
}

export default App;
