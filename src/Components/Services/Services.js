import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import Img1 from "../../Img/Brown Rust Modern Logo Degfcf.gif";
import img2 from "../../Img/Brown Rust Modern Logo Design Tutorial You Tube ffdrddzr.gif";
import img3 from "../../Img/Brown Rust Modern Logo Design Tutorial You Tube Thumbnail.gif";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
    // context
    const theme = useContext(themeContext);
    const darkMode = theme?.state?.darkMode;

    // transition
    const transition = {
        duration: 1,
        type: "spring",
    };

    return (
        <div className="services" id="services">
            {/* left side */}
            <div className="awesome">
                {/* dark mode */}
                <span style={{ color: darkMode ? "white" : "" }}>My Fantastic</span>
                <span>services</span>
                <span>
                    I am a Web Developer with extensive experience in
                    <br />
                    Both Frontend development & Backend.
                </span>
                <a href={Resume} download>
                    <button className="button s-button">Download Resume</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right */}

            <div className="cards">
                {/* first card */}
                <motion.div
                    initial={{ left: "45rem" }}
                    whileInView={{ left: "30rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={Img1}
                    />
                </motion.div>


                {/* second card */}
                <motion.div
                    initial={{ left: "2rem", top: "12rem" }}
                    whileInView={{ left: "7rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={img2}
                    />
                </motion.div>


                {/* 3rd */}
                <motion.div
                    initial={{ top: "19rem", left: "38rem" }}
                    whileInView={{ left: "32rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={img3}
                        color="rgba(252, 166, 31, 0.45)"
                    />
                </motion.div>
                <div
                    className="blur s-blur2"
                    style={{ background: "var(--purple)" }}
                ></div>
            </div>
        </div>
    );
};

export default Services;