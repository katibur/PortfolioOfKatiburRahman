import React from 'react';
import { Link } from 'react-scroll';
import Toggle from '../Toggle/Toggle';
import Resume from '../Services/resume.pdf';

import './Navbar.css';

const Navbar = () => {
    return (
        <div className="n-wrapper" id="Navbar">
            {/* left */}
            <div className="n-left">
                <div className="n-name">Katibur</div>
                <Toggle></Toggle>
            </div>
            {/* right */}
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: "none" }}>
                        <li>
                            <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="services" spy={true} smooth={true}>
                                Serivces
                            </Link>
                        </li>
                        <li>
                            <Link to="portfolio" spy={true} smooth={true}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" spy={true} smooth={true}>
                                Contact Me
                            </Link>
                        </li>

                    </ul>
                </div>
                <a href={Resume} download>
                    <button className="button s-button">Download Resume</button>
                </a>
            </div>
        </div>
    );
};

export default Navbar;