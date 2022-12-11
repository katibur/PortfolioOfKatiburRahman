import React, { useContext } from 'react';
import Footer from '../../Components/Footer/Footer';
import SharedNavbar from '../../Components/SharedNavbar/SharedNavbar';
import { themeContext } from '../../Context';

const About = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="App"
            style={{
                background: darkMode ? "black" : "",
                color: darkMode ? "white" : "",
            }}
        >
            <SharedNavbar></SharedNavbar>
            <h1>Coming Soon.</h1>
            <Footer></Footer>
        </div>
    );
};

export default About;