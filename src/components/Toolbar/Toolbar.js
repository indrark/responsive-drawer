import React from 'react';

import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';


const toolbar = props => (

<header className ="toolbar">
    <nav className = "toolbar__navigation">
        <div> 
            <DrawerToggleButton click={props.drawerClickHandler} />     
        </div>
        <div className ="toolbar__logo"><a href="/">SECURE CLOUD</a></div>
        <div className = "spacer"> </div>
        <div className = "toolbar_navigation-items">
        </div>
    </nav>
    </header>

);


export default toolbar; 