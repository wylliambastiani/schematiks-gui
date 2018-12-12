import React from 'react';
import { IconMenu, IconMenuItem, IconMenuItemType } from 'boomers-iconized-menu';
import { withRouter } from 'react-router-dom';

function Sidebar ({ history }) {
  return (
    <IconMenu>
      <IconMenuItem 
        icon="fas fa-home" 
        type={IconMenuItemType.Action}
        onClick={() => { history.push('/') }} />

      <IconMenuItem 
        icon="fas fa-plus" 
        type={IconMenuItemType.Action} 
        onClick={() => { history.push('/add-server') }} />
    </IconMenu>
  );
}

export default withRouter(Sidebar);