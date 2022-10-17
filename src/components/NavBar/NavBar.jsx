import React, { useState } from "react";
import './NavBar.css';
import { Link, useLocation }  from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { SiInstagram, SiWhatsapp } from 'react-icons/si';

function NavBar() {
    
    const location = useLocation();

    const [ open, setOpen ] = useState(false);
    const [ currentRoute, setCurrentName ] = useState(location.pathname);

    const handleClick = () => {
        setOpen(!open);
    }

    const closeMenu = (routeName) => {
        setOpen(false);
        setCurrentName(routeName)
    }

    return (
        <nav className="navbar">
            <div onClick={() => handleClick()} className='nav-icon'>
                { open ? <FiX /> : <FiMenu /> }
            </div>
            <ul className={open ? 'nav-page-links active' : 'nav-page-links'}>
                <li className={ currentRoute === "/" ? 'nav-page-item selected' : 'nav-page-item'}> 
                    <Link to="/" className={currentRoute === "/" ? 'nav-link selected' : 'nav-link'} onClick={() => closeMenu('/')}>
                        Home
                    </Link>
                </li>
                <li className={ currentRoute === "/cafe" ? 'nav-page-item selected' : 'nav-page-item'}> 
                    <Link to="/cafe" className={currentRoute === "/cafe" ? 'nav-link selected' : 'nav-link'} onClick={() => closeMenu('/cafe')}>
                        Café
                    </Link>
                </li>
                <li className={ currentRoute === "/brecho" ? 'nav-page-item selected' : 'nav-page-item'}> 
                    <Link to="/brecho" className={currentRoute === "/brecho" ? 'nav-link selected' : 'nav-link'} onClick={() => closeMenu('/brecho')}>
                        Brechó
                    </Link>
                </li>
            </ul>
            <ul className={open ? 'nav-social-links active' : 'nav-social-links'}>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.instagram.com/cafeshion.up/" target='blank'>
                        <SiInstagram />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://api.whatsapp.com/message/A7JTFDFODAVYE1?autoload=1&app_absent=0" target='blank'>
                        <SiWhatsapp />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;