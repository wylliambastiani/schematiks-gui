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

      {/* <IconMenuItem 
        icon="fab fa-dev" 
        type={IconMenuItemType.Action} /> */}

      {/* <IconMenuItem 
        icon="fas fa-exclamation-triangle" 
        type={IconMenuItemType.Action} /> */}

      {/* <IconMenuItem 
        icon="fab fa-product-hunt" 
        type={IconMenuItemType.Action} /> */}

      {/* <IconMenuItem 
        icon="fas fa-skull-crossbones" 
        type={IconMenuItemType.Action} /> */}

      {/* <IconMenuItem 
        icon="fas fa-server" 
        type={IconMenuItemType.Action} /> */}

      <IconMenuItem 
        icon="fas fa-plus" 
        type={IconMenuItemType.Action} 
        onClick={() => { history.push('/add-server') }} />
    </IconMenu>
  );
}

export default withRouter(Sidebar);