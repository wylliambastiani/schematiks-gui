import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { square_add } from 'react-icons-kit/ikons/square_add';

import './ServerList.css';

class ServerListHeader extends Component {
  render () {
    return (
      <div>
        <div id="side-menu-header">
          <div id="side-menu-header-add-icon">
            <Icon size={16} icon={square_add} />
          </div>
        </div>
      </div>
    );
  }
}

export default ServerListHeader;