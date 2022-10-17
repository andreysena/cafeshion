import React from 'react';
import './Header.css';

import logo from '../../assets/images/cafeshion_logo.png';

function Header() {
    return (
        <header>
            <img className='logo' src={logo} />
            <h1 className='header-title'>CAFÉSHION</h1>
        </header>
    );
}

export default Header;