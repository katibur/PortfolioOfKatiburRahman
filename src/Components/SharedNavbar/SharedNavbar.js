import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from 'react-scroll'
import Toggle from '../Toggle/Toggle';
import Resume from '../Services/resume.pdf';

import './SharedNavbar.css';
import { themeContext } from '../../Context';

const SharedNavbar = () => {

    // context
    const theme = useContext(themeContext);
    const darkMode = theme?.state?.darkMode;

    const menuItems = <React.Fragment>
        <li><Link to='/'>Home</Link ></li>
        <li><Link to='/blogs'>Blogs</Link ></li>
        <li><Link to='/about'>About</Link ></li>
        <div className="n-left">
            <Toggle></Toggle>
        </div>
        <a href={Resume} download>
            <button className="n-button">Download Resume</button>
        </a>
    </React.Fragment>

    return (
        <div>
            <div className="navbar flex justify-between" style={{ color: darkMode ? "white" : "" }}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52" style={{ color: darkMode ? "black" : "white", background: darkMode ? "white" : 'black' }}>
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Katibur</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default SharedNavbar;