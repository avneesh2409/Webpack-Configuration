import React from 'react';
import Navmenu from './child/NavMenu';

const Layout = (props) => {
    return (
        <>
            <Navmenu />
            {props.children}
        </>
    )
}
export default Layout
