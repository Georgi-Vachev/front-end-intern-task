import './styles/Layout.css';
import React from 'react';
import Header from './Header';
import Main from './Main';

function Layout() {
    return ( 
        <div className = "Layout">
            <Header />
            <Main />
        </div>
    );
}

export default Layout;