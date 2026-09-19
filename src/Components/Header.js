import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav" title="Show navigation">
            <i className="fa fa-bars"></i>
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Experience
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Projects
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <p className="hero-greeting">Hello, I'm</p>
            </Fade>

            <Fade bottom duration={1000}>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>

            <Fade bottom duration={1300}>
              <h2>{description}</h2>
            </Fade>

            <Fade bottom duration={1600}>
              <p className="hero-description">
                I build systems, work with data, and turn business
                requirements into practical technology solutions.
              </p>
            </Fade>

            <Fade bottom duration={1900}>
              <div className="hero-buttons">
                <a href="#portfolio" className="button btn primary-btn">
                  <i className="fa fa-folder-open"></i>
                  View Projects
                </a>

                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button btn github-btn"
                >
                  <i className="fa fa-github"></i>
                  GitHub
                </a>
              </div>
            </Fade>

            <Fade bottom duration={2200}>
              <div className="hero-social">
                <a
                  href="https://www.linkedin.com/in/afiqalvadeano/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fa fa-linkedin"></i>
                </a>

                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fa fa-github"></i>
                </a>
              </div>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;