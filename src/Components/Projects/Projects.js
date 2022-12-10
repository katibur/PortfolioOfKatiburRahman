import React, { useContext } from "react";
import './Projects.css';

import img1 from '../../Img/1.png'
import img2 from '../../Img/2.png'
import img3 from '../../Img/3.png'



import { themeContext } from "../../Context";
const Projects = () => {
    const theme = useContext(themeContext);
    const darkMode = theme?.state?.darkMode;

    return (

        <section className="portfolio" id="portfolio">
            <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
            <span>Portfolio</span>

            <div className="portfolio-content">
                <div className="row">
                    <img src={img1} alt="" />
                    <div className="layer">
                        <h5 style={{ color: darkMode ? '' : 'white' }}>Wheels On Tars</h5>
                        <a href="https://wheels-on-tars.web.app/" rel="noReferrer" target={"_blank"}>Visit Live Site</a>
                    </div>
                </div>

                <div className="row">
                    <img src={img2} alt="" />
                    <div className="layer">
                        <h5 style={{ color: darkMode ? '' : 'white' }}>Capture The Moment</h5>
                        <a href="https://capture-the-moment-210d2.web.app/" rel="noReferrer" target={"_blank"}> Visit Live Site</a>
                    </div>
                </div>

                <div className="row">
                    <img src={img3} alt="" />
                    <div className="layer">
                        <h5 style={{ color: darkMode ? '' : 'white' }}>Tech City</h5>
                        <a href="https://tech-city-online.web.app/" rel="noReferrer" target={"_blank"}>Visit Live Site</a>
                    </div>
                </div>


            </div>
        </section>

    );
};

export default Projects;