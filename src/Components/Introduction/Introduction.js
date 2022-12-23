import React, { useContext } from "react";
import './Introduction.css';
import boy from "../../Img/profile.gif";
import { themeContext } from "../../Context";

import { Link as LinkRoll } from 'react-router-dom';
import { Link } from 'react-scroll'

import { Typewriter } from 'react-simple-typewriter'

const Introduction = () => {

    // context
    const theme = useContext(themeContext);
    const darkMode = theme?.state?.darkMode;


    return (
        <div className="Intro" id="Intro">
            {/* left name side */}
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? "white" : "" }}>Hello! I Am</span>
                    <span>S M Katibur Rahman</span>
                    <div className="typeWriter">
                        <Typewriter
                            words={['MERN Stack Developer', 'Front End Developer', 'Full Stack Web Developer', 'Creative Designer']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                    <span>
                        Web Developer with high level of experience in Full Stack web
                        development, producing the Quality work.
                    </span>
                </div>
                <Link to="contact">
                    <button className="button i-button"><LinkRoll to='/about'>About Me</LinkRoll ></button>
                </Link>
            </div>

            {/* right image side */}
            <div className="i-right">
                <img src={boy} alt="" />

                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div
                    className="blur"
                    style={{
                        background: "#C1F5FF",
                        top: "17rem",
                        width: "21rem",
                        height: "11rem",
                        left: "-9rem",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Introduction;