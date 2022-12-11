import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { themeContext } from '../../Context';
import './Projects.css';


const ProjectsCard = ({ category }) => {
    const theme = useContext(themeContext);
    const darkMode = theme?.state?.darkMode;

    const { cover, _id } = category;

    return (
        <div className="row">
            <img src={cover} alt="" />
            <div className="layer">
                <h5 style={{ color: darkMode ? '' : 'white' }}>{category.title}</h5>
                <Link to={`/categories/${_id}`}><button className="button">Details</button></Link>
            </div>
        </div>

    );
};

export default ProjectsCard;