import React from "react";
import image from "../../images/workspace.jpg";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="main-container">
      <div className="projects">
        <h2 className="title">Projects</h2>
        <div className="projects-center">
          <div className="single-project">
            <div className="single-project-img">
              <img src={image} alt="Imag" />
            </div>

            <div className="single-project-info">
              <h3> my projects</h3>
              <p>
                lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum
                dolor sit amet, consectetur adipiscing lorem ipsum dolor sit
                amet, consectetur adipiscing lorem ipsum dolor sit amet,
                consectetur adipiscing lorem ipsum dolor sit amet, consectetur
                adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
              </p>
            </div>
          </div>

          <div className="single-project">
            <div className="single-project-img">
              <img src={image} alt="Imag" />
            </div>

            <div className="single-project-info">
              <h3> my projects</h3>
              <p>
                lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum
                dolor sit amet, consectetur adipiscing lorem ipsum dolor sit
                amet, consectetur adipiscing lorem ipsum dolor sit amet,
                consectetur adipiscing lorem ipsum dolor sit amet, consectetur
                adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
              </p>
            </div>
          </div>
          <div className="single-project">
            <div className="single-project-img">
              <img src={image} alt="Imag" />
            </div>

            <div className="single-project-info">
              <h3> my projects</h3>
              <p>
                lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum
                dolor sit amet, consectetur adipiscing lorem ipsum dolor sit
                amet, consectetur adipiscing lorem ipsum dolor sit amet,
                consectetur adipiscing lorem ipsum dolor sit amet, consectetur
                adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
              </p>
            </div>
          </div>

          <div className="single-project">
            <div className="single-project-img">
              <img src={image} alt="Imag" />
            </div>

            <div className="single-project-info">
              <h3> my projects</h3>
              <p>
                lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum
                dolor sit amet, consectetur adipiscing lorem ipsum dolor sit
                amet, consectetur adipiscing lorem ipsum dolor sit amet,
                consectetur adipiscing lorem ipsum dolor sit amet, consectetur
                adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
