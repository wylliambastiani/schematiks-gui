import React from 'react';
import { IconMenu, IconMenuItem, IconMenuItemType } from 'boomers-iconized-menu';

function Sidebar () {
  return (
    <IconMenu>
      <IconMenuItem 
        icon="fab fa-dev" 
        type={IconMenuItemType.Action} />

      <IconMenuItem 
        icon="fas fa-exclamation-triangle" 
        type={IconMenuItemType.Action} />

      <IconMenuItem 
        icon="fab fa-product-hunt" 
        type={IconMenuItemType.Action} />

      <IconMenuItem 
        icon="fas fa-skull-crossbones" 
        type={IconMenuItemType.Action} />

      <IconMenuItem 
        icon="fas fa-server" 
        type={IconMenuItemType.Action} />

      <IconMenuItem 
        icon="fas fa-plus" 
        type={IconMenuItemType.Action} />
    </IconMenu>
  );
}

export default Sidebar;