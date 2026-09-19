import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    const networks = (this.props.data.social || []).filter(
      (network) => network.name === "linkedin" || network.name === "github"
    );

    return (
      <footer id="footer">
        <Fade bottom duration={800}>
          <div className="footer-container">
            <div className="footer-social">
              {networks.map((network) => (
                <a
                  key={network.name}
                  href={network.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={network.name}
                >
                  <i className={network.className}></i>
                </a>
              ))}
            </div>

            <div className="footer-divider"></div>

            <p className="footer-name">
              Muhammad Afiq Alvadeano
            </p>

            <p className="footer-copy">
              © {new Date().getFullYear()} Muhammad Afiq Alvadeano. All rights
              reserved.
            </p>
          </div>
        </Fade>

        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;