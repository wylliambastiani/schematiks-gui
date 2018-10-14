import React, { Component } from 'react';
import { pushRotate as Menu } from 'react-burger-menu';
import ServerListHeader from './ServerListHeader';
import ServerListItem from './ServerListItem';

import './ServerList.css';

class ServerList extends Component {

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
			<Menu
				pageWrapId={this.props.pageWrapId}
				outerContainerId={this.props.outerContainerId}
				customCrossIcon={false} 
				isOpen={true} >
			
				<ServerListHeader title={'Schematiks'} />
			
				<ServerListItem />
				<ServerListItem />
				<ServerListItem />
				<ServerListItem />
			</Menu>
		);
	}
}

export default ServerList;