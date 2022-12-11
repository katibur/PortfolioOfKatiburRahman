import React from 'react';
import Contact from '../../Components/Contact/Contact';
import Experience from '../../Components/Experience/Experience';
import Introduction from '../../Components/Introduction/Introduction';
import Projects from '../../Components/Projects/Projects';
import Services from '../../Components/Services/Services';


const Home = () => {

    return (
        <div className='mx-auto'>
            <Introduction></Introduction>
            <Services></Services>
            <Experience></Experience>
            <Projects></Projects>
            <Contact></Contact>

        </div>
    );
};

export default Home;