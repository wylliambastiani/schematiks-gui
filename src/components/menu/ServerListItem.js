import React, { Component } from 'react';
import Icon from 'react-icons-kit';
import { caretRight as caret } from 'react-icons-kit/fa';

import './ServerList.css';

  class ServerListItem extends Component {

  constructor (props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = { isSelected: false };
	}

	toggle() {
		this.setState({
      isSelected: !this.state.isSelected
    });
  }
  
  render () {
    let itemStyleClassName = 'server-list-item';
      
    return (
      <div className={itemStyleClassName} onClick={this.toggle} >
        <div>
          <span className={'server-list-item-title'}>{this.props.title}</span>
          <div className={'server-list-item-icon'}>
            <Icon size={16} icon={caret}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ServerListItem;