import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { square_add } from 'react-icons-kit/ikons/square_add';

import './ServerList.css';

class ServerListHeader extends Component {
  render () {
    return (
      <div id="side-menu-header">
        <span id="side-menu-header-title">{this.props.title}</span>
        <Icon id="side-menu-header-add-icon" size={16} icon={square_add}/>
      </div>
    );
  }
}

export default ServerListHeader;