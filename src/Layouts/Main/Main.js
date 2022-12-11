import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';

import { themeContext } from '../../Context';

const Main = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="App"
            style={{
                background: darkMode ? "black" : "",
                color: darkMode ? "white" : "",
            }}
        >
            <Navbar></Navbar>
            <Outlet>
            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;