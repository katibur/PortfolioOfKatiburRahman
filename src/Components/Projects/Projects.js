import React, { useContext } from "react";
import './Projects.css';



import ProjectsCard from "./ProjectsCard";
import { useQuery } from "@tanstack/react-query";
import { themeContext } from "../../Context";
import Loading from "../Loading/Loading";
const Projects = () => {
    const theme = useContext(themeContext);
    const darkMode = theme?.state?.darkMode;

    const url = ' https://portfolio-server-katibur.vercel.app/categories';

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(url, {
            })
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }


    return (

        <div className="mx-auto text-center items-center portfolio">
            <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects </span><br />
            <span>Portfolio</span>
            <section className="mx-auto contents">
                <div className="portfolio-content">
                    {categories &&
                        categories.map(category => <ProjectsCard
                            key={category._id}
                            category={category}
                        ></ProjectsCard>)
                    }
                </div>
            </section>
        </div>

    );
};

export default Projects;