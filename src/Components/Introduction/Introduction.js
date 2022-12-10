import React, { useContext } from "react";
import './Introduction.css';

import Vector1 from "../../Img/Vector1.png";
import Vector2 from "../../Img/Vector2.png";
import boy from "../../Img/boy.png";
import glassesimoji from "../../Img/glassesimoji.png";

import crown from "../../Img/crown.png";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import FloatingDiv from "../FloatingDiv/FloatingDiv";



import { Typewriter } from 'react-simple-typewriter'



const Introduction = () => {
    // Transition
    const transition = { duration: 2, type: "spring" };

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
                <Link to="contact" smooth={true} spy={true}>
                    <button className="button i-button">Hire me</button>
                </Link>
            </div>
            {/* right image side */}
            <div className="i-right">
                <img src={Vector2} alt="" />
                <img src={Vector1} alt="" />
                <img src={boy} alt="" />
                {/* animation */}
                <motion.img


                    initial={{ left: "25rem", top: "18rem" }}
                    whileInView={{ left: "-5rem" }}
                    transition={transition}
                    src={glassesimoji}
                    alt=""
                />

                <motion.div

                    initial={{ left: "-10rem" }}
                    whileInView={{ left: "5rem" }}

                    transition={transition}
                    className="floating-div"
                >
                    <FloatingDiv img={crown} text1="Web" text2="Developer" />
                </motion.div>

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