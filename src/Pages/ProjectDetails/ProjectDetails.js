import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import SharedNavbar from '../../Components/SharedNavbar/SharedNavbar';
import { themeContext } from '../../Context';
import ProjectsDetailsCard from './ProjectsDetailsCard';

const ProjectDetails = () => {

    const projects = useLoaderData();
    console.log(projects);
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
            {
                projects &&
                projects.map(project => <ProjectsDetailsCard
                    key={project._id}
                    project={project}
                ></ProjectsDetailsCard>)
            }
            <Footer></Footer>
        </div>
    );
};

export default ProjectDetails;