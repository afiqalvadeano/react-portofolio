import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const email = this.props.data.email;
    const social = this.props.data.social || [];

    const linkedin = social.find((item) => item.name === "linkedin");
    const github = social.find((item) => item.name === "github");

    return (
      <section id="contact">
        <Fade duration={1000}>
          <div className="contact-container">
            <div className="contact-heading">
              <p className="section-label">CONTACT</p>
              <h2>Let's Connect</h2>
              <p>
                {this.props.data.contactmessage}
              </p>
            </div>

            <div className="contact-content">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fa fa-envelope"></i>
                </div>

                <div>
                  <span className="contact-card-label">EMAIL</span>
                  <a href={`mailto:${email}`}>{email}</a>
                </div>
              </div>

              {linkedin && (
                <a
                  href={linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card contact-card-link"
                >
                  <div className="contact-icon">
                    <i className="fa fa-linkedin"></i>
                  </div>

                  <div>
                    <span className="contact-card-label">LINKEDIN</span>
                    <span>Connect with me</span>
                  </div>

                  <i className="fa fa-arrow-right contact-arrow"></i>
                </a>
              )}

              {github && (
                <a
                  href={github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card contact-card-link"
                >
                  <div className="contact-icon">
                    <i className="fa fa-github"></i>
                  </div>

                  <div>
                    <span className="contact-card-label">GITHUB</span>
                    <span>View my projects</span>
                  </div>

                  <i className="fa fa-arrow-right contact-arrow"></i>
                </a>
              )}
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Contact;