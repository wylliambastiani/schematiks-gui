import React, { Component } from 'react';
import { connect } from 'react-redux';	
import { pushRotate as Menu } from 'react-burger-menu';
import ServerListHeader from './ServerListHeader';
import ServerListItem from './ServerListItem';

import './ServerList.css';

class ServerList extends Component {
	render () {
		const { servers } = this.props;

		return (
			<Menu
				pageWrapId={this.props.pageWrapId}
				outerContainerId={this.props.outerContainerId}
				customCrossIcon={false} 
				isOpen={this.props.menuState.isMenuOpen} >
			
				<ServerListHeader/>

				<div>				
				{
					servers.map((s, i) => {
						return( 
								<ServerListItem  
								key={i}
								serverId={s.id}					
								serverName={s.name} 
								isSelectedOnMenu={s.isSelectedOnMenu}
								onClick={() => this.props.onServerListItemClick(s.id) }
								/>
						)
					})
				}
				</div>

				<a href="#" className={'teste'}>Adicionar Servidor</a>
			</Menu>
		);
	}
}

const mapStateToProps = state => {
  return { 
		servers: state.serverList,
		menuState: state.menuState
	};
}

const mapDispatchToProps = dispatch => {
	return { onServerListItemClick: (id) => dispatch({ type: 'SELECTED_SERVER_ON_MENU', id }) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerList);