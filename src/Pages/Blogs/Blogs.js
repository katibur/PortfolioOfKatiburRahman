import React, { useContext } from 'react';
import Footer from '../../Components/Footer/Footer';
import SharedNavbar from '../../Components/SharedNavbar/SharedNavbar';

import { themeContext } from '../../Context';

const Blogs = () => {
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

            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6">I didn't write any blogs yet.<br />If i do that,it will appear here.</p>
                        <h1 className="text-5xl font-bold">Stay Tuned.</h1>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;