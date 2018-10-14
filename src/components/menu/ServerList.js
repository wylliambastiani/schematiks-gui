import React, { Component } from 'react';
import { pushRotate as Menu } from 'react-burger-menu';
import ServerListHeader from './ServerListHeader';
import ServerListItem from './ServerListItem';

import './ServerList.css';

class ServerList extends Component {
	render () {
		return (
			<Menu
				pageWrapId={this.props.pageWrapId}
				outerContainerId={this.props.outerContainerId}
				customCrossIcon={false} 
				isOpen={true} >
			
				<ServerListHeader/>
			
				<ServerListItem title={'Servidor local'} />
				<ServerListItem title={'Servidor de dev'}/>
				<ServerListItem title={'Servidor de hml'}/>
				<ServerListItem title={'Servidor de prod'}/>
				<ServerListItem title={'Servidor local'} />
				<ServerListItem title={'Servidor de dev'}/>
				<ServerListItem title={'Servidor de hml'}/>
				<ServerListItem title={'Servidor de prod'}/>
				<ServerListItem title={'Servidor local'} />
				<ServerListItem title={'Servidor de dev'}/>
				<ServerListItem title={'Servidor de hml'}/>
				<ServerListItem title={'Servidor de prod'}/>
				<ServerListItem title={'Servidor local'} />
				<ServerListItem title={'Servidor de prod'}/>

			</Menu>
		);
	}
}

export default ServerList;