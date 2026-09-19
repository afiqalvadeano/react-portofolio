import React, { Component } from "react";
import Zmage from "react-zmage";
import { Fade } from "react-awesome-reveal";

class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map((project) => {
      const projectImage = "images/portfolio/" + project.image;

      return (
        <div className="project-card" key={project.title}>
          <div className="project-image">
            <Zmage
              alt={project.title}
              src={projectImage}
            />
          </div>

          <div className="project-content">
            <p className="project-category">
              {project.category}
            </p>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description ||
                "A project focused on applying technology, data, and analytical thinking to solve practical problems."}
            </p>

            {project.url && project.url !== "#" && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
                <i className="fa fa-arrow-right"></i>
              </a>
            )}
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade bottom duration={1000}>
          <div className="portfolio-container">
            <div className="section-heading portfolio-heading">
              <p className="section-label">PROJECTS</p>

              <h2>Selected Projects</h2>

              <p className="portfolio-intro">
                A selection of projects involving data analysis, system
                development, reporting, and applied machine learning.
              </p>
            </div>

            <div className="projects-grid">
              {projects}
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;