import React, { Component } from 'react';
import { Collapse } from 'reactstrap';

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
        <span className={'server-list-item-title'}>Nome do servidor</span>
        <Collapse isOpen={this.state.isCollapsed}>
          <div className={'server-list-item-content'}>
            <span style={{ display: 'block', fontSize: '12px' }} >Tipo: MSSQL 2016</span>
            <span style={{ display: 'block', fontSize: '12px' }} >ConnectionString: mssql://localhost/</span>
            <span style={{ display: 'block', fontSize: '12px' }} >Usuário: SA</span>
            <span style={{ display: 'block', fontSize: '12px' }} >Ultima snapshot: 10/10/2018</span>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default ServerListItem;