import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';

function About() {
    const [pages] = useState([
        {
            name: "about me"
        }
    ]);
    const [currentPage] = useState(pages[0]);

    return (
        <div className="masthead text-center text-white d-flex">
            <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h1>{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr />
                        <p className="text-faded mb-5">I am an experienced front end developer with detailed full stack knowledge. I have more than eight years of experience in developing mid- to large-scale websites using the latest core web technologies, in which I maintain expert-level knowledge. I recently earned a Certificate in Full Stack Web Development from the University of Sydney , where I developed skills in MERN Stack and SQL Server.</p>
                       
                        <p className="text-faded mb-5">   <section class="sectionDescription">
      <p> An IT Professional with an experience of developing and maintaining software applications for our clients with over 3 years’ experience in the IT Industry. 
        A results driven, self -motivated and enthusiastic individual with the capacity to learn new things promptly and efficiently. 
        </p>
    </section>.</p>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About