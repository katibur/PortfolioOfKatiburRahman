import React, { useContext } from "react";
import Footer from "../../Components/Footer/Footer";
import SharedNavbar from "../../Components/SharedNavbar/SharedNavbar";
import { themeContext } from "../../Context";
import SMKatiburRahman from "../../Components/Services/S M Katibur Rahman.pdf";

import profile from "../../Img/profile.JPG";

const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <SharedNavbar></SharedNavbar>
      <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
          <img
            src={profile}
            alt=""
            className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
          />
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-center md:text-left">
              S M Katibur Rahman
            </h4>
            <p className="dark:text-gray-400">
              I am S M Katibur Rahman, Nickname is Sany. I have completed my
              graduation from CSE department of AIUB, Dhaka, Bangladesh.
              Completed some courses which are relevant to my STUDY. I have also
              completed some projects using CSS, Frameworks of CSS, JavaScript,
              React. js, Node. js, MongoDB.{" "}
            </p>
            <br />
            <p className="dark:text-gray-400">
              Though i am a web developer but i like to travel and collecting
              gadgets. I also like to do CODING. I wish i will be a btter
              version of me after 5 years.{" "}
            </p>
            <a href={SMKatiburRahman} download>
              <button className="n-button">Download Resume</button>
            </a>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
