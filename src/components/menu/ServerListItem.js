import React, { Component } from 'react';
import Icon from 'react-icons-kit';
import { caretRight as caret } from 'react-icons-kit/fa';

import './ServerList.css';

  class ServerListItem extends Component {

  constructor (props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = { isCollapsed: false };
	}

	toggle() {
		this.setState({ isCollapsed: !this.state.isCollapsed });
  }
  
  render () {
    return (
      <div className={'server-list-item'} onClick={this.toggle} >
        <div>
          <Icon size={16} icon={caret}/>
          <span className={'server-list-item-title'}>{this.props.title}</span>
        </div>
      </div>
    );
  }
}

export default ServerListItem;