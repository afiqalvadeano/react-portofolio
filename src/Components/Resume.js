import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";

class Resume extends Component {
  render() {
    if (!this.props.data) return null;

    const education = this.props.data.education.map((item) => (
      <div className="resume-item" key={item.school}>
        <div className="resume-item-header">
          <div>
            <h3>{item.school}</h3>
            <p className="resume-meta">
              {item.degree} <span>•</span> {item.graduated}
            </p>
          </div>
        </div>
        <p className="resume-description">{item.description}</p>
      </div>
    ));

    const work = this.props.data.work.map((item) => (
      <div className="resume-item" key={item.company}>
        <div className="resume-item-header">
          <div>
            <h3>{item.title}</h3>
            <p className="resume-company">{item.company}</p>
          </div>
          <span className="resume-date">{item.years}</span>
        </div>

        <p className="resume-description">{item.description}</p>

        <div className="experience-tags">
          <span>SQL</span>
          <span>Data Processing</span>
          <span>System Analysis</span>
          <span>Reporting</span>
          <span>Dashboard</span>
          <span>UAT</span>
        </div>
      </div>
    ));

    const skillGroups = [
      {
        title: "Data & Analytics",
        icon: "fa-database",
        skills: this.props.data.skills.dataAnalytics,
      },
      {
        title: "System & Business Analysis",
        icon: "fa-sitemap",
        skills: this.props.data.skills.systemAnalysis,
      },
      {
        title: "Development",
        icon: "fa-code",
        skills: this.props.data.skills.development,
      },
      {
        title: "Tools & Database",
        icon: "fa-wrench",
        skills: this.props.data.skills.toolsDatabase,
      },
    ];

    return (
      <section id="resume">
        <Fade duration={1000}>
          <div className="resume-container">

            {/* EXPERIENCE */}
            <div className="resume-section">
              <div className="section-heading">
                <p className="section-label">EXPERIENCE</p>
                <h2>Professional Experience</h2>
              </div>

              <div className="resume-content">
                {work}
              </div>
            </div>

            {/* EDUCATION */}
            <div className="resume-section">
              <div className="section-heading">
                <p className="section-label">EDUCATION</p>
                <h2>Academic Background</h2>
              </div>

              <div className="resume-content">
                {education}
              </div>
            </div>

            {/* SKILLS */}
            <div className="resume-section">
              <div className="section-heading">
                <p className="section-label">SKILLS</p>
                <h2>Tools & Expertise</h2>
                <p className="resume-section-intro">
                  {this.props.data.skillmessage}
                </p>
              </div>

              <div className="skills-grid">
                {skillGroups.map((group) => (
                  <div className="skill-group-card" key={group.title}>
                    <div className="skill-group-header">
                      <span className="skill-group-icon">
                        <i className={`fa ${group.icon}`}></i>
                      </span>
                      <h3>{group.title}</h3>
                    </div>

                    <div className="skill-tags">
                      {group.skills.map((skill) => (
                        <span className="skill-tag" key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Fade>
      </section>
    );
  }
}

export default Resume;