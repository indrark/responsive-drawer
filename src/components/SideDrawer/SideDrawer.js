import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    return(
        <nav className= {drawerClasses} >
            <ul>
                <li><a href="/">Files</a></li>
                <li><a href="/">Accounts</a></li>
                <li><a href="/">Settings</a></li>
                <li><a href="/">Upload</a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;