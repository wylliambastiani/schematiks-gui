import React, { Component } from 'react';
import { pushRotate as Menu } from 'react-burger-menu';
import { Icon } from 'react-icons-kit'
import {square_add} from 'react-icons-kit/ikons/square_add'

import './App.css';

class App extends Component {
  render() {
    return (
      <div id="root-container">
        <Menu
          pageWrapId={"main-content-wrapper"}
          outerContainerId={"root-container"}
          customCrossIcon={false} >
          
          <div id="side-menu-header">
              <span id="side-menu-header-title">Schematiks</span>
            
              <Icon id="side-menu-header-add-icon" size={16} icon={square_add}/>
          </div>
        </Menu>

        <main id="main-content-wrapper">

        </main>
      </div>
    );
  }
}

export default App;
