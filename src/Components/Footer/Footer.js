import React from "react";
import "./Footer.css";
import Wave from "../../Img/wave.jpg";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import GitHub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin"

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{ width: "100%" }} />
            <div className="f-content">
                <span>All Rights Reserved By @Katibur</span>
                <div className="f-icons">
                    <a href="https://www.instagram.com/katibur_rahman_sany" target="blank"><Insta color="white" size={"3rem"} /></a>

                    <a href="https://www.facebook.com/katibur.sany" target="blank"><Facebook color="white" size={"3rem"} /></a>

                    <a href="https://github.com/katibur" target="blank"> <GitHub color="white" size={"3rem"} /></a>

                    <a href="https://www.linkedin.com/in/katibur-rahman" target="blank"> <Linkedin color="white" size={"3rem"} /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;