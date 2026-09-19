import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row about-container">
            <div className="about-image three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt={`${name} profile`}
              />
            </div>

            <div className="nine columns main-col">
              <p className="section-label">ABOUT ME</p>

              <h2>
                Building systems,
                <br />
                working with data.
              </h2>

              <p className="about-text">{bio}</p>

              <div className="about-highlights">
                <div className="about-item">
                  <span className="about-icon">
                    <i className="fa fa-database"></i>
                  </span>
                  <div>
                    <h3>Data & Analytics</h3>
                    <p>
                      SQL, data processing, reporting, dashboards, and data
                      validation.
                    </p>
                  </div>
                </div>

                <div className="about-item">
                  <span className="about-icon">
                    <i className="fa fa-cogs"></i>
                  </span>
                  <div>
                    <h3>System Development</h3>
                    <p>
                      Requirement analysis, system design, development,
                      testing, UAT, and maintenance.
                    </p>
                  </div>
                </div>

                <div className="about-item">
                  <span className="about-icon">
                    <i className="fa fa-line-chart"></i>
                  </span>
                  <div>
                    <h3>Business Process</h3>
                    <p>
                      Translating operational requirements into practical
                      technology solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="about-contact">
                <div>
                  <span className="contact-label">EMAIL</span>
                  <a href={`mailto:${email}`}>{email}</a>
                </div>

                <div className="about-actions">
                  {resumeDownload && (
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>
                      Download CV
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;