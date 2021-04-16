import React, { Component } from "react";

import BaffleText from './baffle-text/index'

class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <footer id={this.props.id} className="contact">
        <div className="row">
          <div className="col-2" className="side">
            {/* <ul className="social-links">{networks}</ul> */}
            <h2>
              <BaffleText text="Contact" revealDuration={500} revealDelay={500} parentMethod={this.show} callMethodTime={1100} />
            </h2>
          </div>
          <div className="col-10">
            <div className="line-text">
              <h4>Get In Touch</h4>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
