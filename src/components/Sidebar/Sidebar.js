import React from 'react';
import { IconMenu, IconMenuItem, IconMenuItemType } from 'boomers-iconized-menu';
import { withRouter } from 'react-router-dom';

function Sidebar ({ history }) {
  return (
    <IconMenu>
      <IconMenuItem 
        icon="fas fa-home" 
        type={IconMenuItemType.Panel}>
      
        <div style={{backgroundColor: "cyan"}}>
         
          <div className="card" style={{ width: "270px" }}>

            <img className="card-img-top" width="100px" src="https://www.boomers.com.br/assets/images/logo.webp" alt="Card image cap"></img>

            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <br/>
          <div className="card" style={{ width: "270px" }}>

<img className="card-img-top" width="100px" src="https://www.boomers.com.br/assets/images/logo.webp" alt="Card image cap"></img>

<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div>

<br />
<div className="card" style={{ width: "270px" }}>

<img className="card-img-top" width="100px" src="https://www.boomers.com.br/assets/images/logo.webp" alt="Card image cap"></img>

<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div>

        </div>  
      </IconMenuItem>

      <IconMenuItem 
        icon="fas fa-plus" 
        type={IconMenuItemType.Action} 
        onClick={() => { history.push('/add-server') }} />

    </IconMenu>
  );
}

export default withRouter(Sidebar);