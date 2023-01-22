import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Project from "../components/Project";
import { capitalizeFirstLetter } from '../utils/helpers';

function Portfolio() {
    const [pages] = useState([
        {
            name: "portfolio"
        }
    ]);
    const [currentPage] = useState(pages[0]);
    const [projects] = useState([
        {
            name: 'PrettyStones',
            description: 'MongoDB/Express/GraphQL/Apollo',
            link: "https://pretty-stones-jewel-store.herokuapp.com/",
            repo: "https://github.com/Vidhi0307/PrettyStones-Shop"
        },
        {
            name: 'GoogleAPI',
            description: 'MERN Stack',
            link: "https://google-pro-api.herokuapp.com/",
            repo: "https://github.com/Vidhi0307/google-pro-api/"
        },
        
        
        {
            name: 'TechBlog',
            description: 'Node/MySQL/Sequalize',
            link: "https://techpro-blog.herokuapp.com/",
            repo: "https://github.com/Vidhi0307/TechProBlog"
        },
        {
            name: 'WeatherCheckApp',
            description: 'JavaScript/JQuery/Bootstrap',
            link: " https://vidhi0307.github.io/WeatherCheckApp/",
            repo: "https://github.com/Vidhi0307/WeatherCheckApp"
        },
       
        {
            name: 'CodeQuiz',
            description: 'JavaScript/JQuery/CSS',
            link: "https://vidhi0307.github.io/CodeQuiz-Week4/",
            repo: "https://github.com/Vidhi0307/CodeQuiz-Week4/"
        },
        {
            name: 'PasswordGenerator',
            description: 'HTML/CSS/JavaScript',
            link: "https://vidhi0307.github.io/PasswordGenerator-Week3/",
            repo: " https://github.com/Vidhi0307/PasswordGenerator-Week3"
        },
        
     
        {
            name: 'DailyPlanner',
            description: 'HTML/CSS/JavaScript',
            link: "https://vidhi0307.github.io/DailyPlanner_Week5/",
            repo: "https://github.com/sylviaprabudy/taskmaster-pro"
        }
      
    ]);

    return (
        <Container className="p-0">
            <div className="container-fluid p-0">
                <h1 className="text-center margin-top">{capitalizeFirstLetter(currentPage.name)}</h1>
                <hr className="my-4" />
                <div className="row no-gutters popup-gallery">
                   
                        {projects.map((project, idx) => (
                            <Project
                                project={project}
                                key={"project" + idx}
                            />
                        ))}
                    </div>
                
            </div>
        </Container>
    );
};

export default Portfolio;