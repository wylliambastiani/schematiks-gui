import React, { Component } from 'react';
import { IconMenu, IconMenuItem } from 'boomers-iconized-menu';

import './App.css';

class App extends Component {
  render() {
    return (
      <div id="root-container">
        <IconMenu>
          <IconMenuItem icon="fas fa-plus">
            <div style={{ backgroundColor: 'rgba(0, 0, 0, .5)' }}>
            </div>
          </IconMenuItem>

          <IconMenuItem icon="far fa-plus-square">
            <div style={{ backgroundColor: 'rgba(0, 0, 0, .5)' }}>
            </div>
          </IconMenuItem>

          <IconMenuItem icon="fas fa-plus-square">
            <div style={{ backgroundColor: 'rgba(0, 0, 0, .5)' }}>
            </div>
          </IconMenuItem>
        </IconMenu>
      </div>
    );
  }
}

export default App;
