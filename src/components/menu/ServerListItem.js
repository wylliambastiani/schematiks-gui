import React, { Component } from 'react';
import Icon from 'react-icons-kit';
import { caretRight as caret } from 'react-icons-kit/fa';

import './ServerList.css';

  class ServerListItem extends Component {

  render () {
    const { isSelectedOnMenu } = this.props;
    let itemStyleClassName = isSelectedOnMenu? 'server-list-item-selected' : 'server-list-item';
      
    return (
      <div className={itemStyleClassName} onClick={this.props.onClick} >
        <div>
          <span className={'server-list-item-title'}>{this.props.serverName}</span>
          <div className={'server-list-item-icon'}>
            <Icon size={16} icon={caret}/>
          </div>
        </div>
      </div>
    );
  }
}


export default ServerListItem;