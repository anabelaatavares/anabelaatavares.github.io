import React, { Component } from "react";

import BaffleText from './baffle-text/index'

class Footer extends Component {
  render() {
    const { data } = this.props
    console.log(data);
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-2">
              <div className="side">
                <h2>
                  <BaffleText text="Contact" revealDuration={500} revealDelay={500} parentMethod={this.show} callMethodTime={1100} />
                </h2>
              </div>
            </div>
            <div className="col-12 col-lg-9 offset-lg-1">
              <div className="line-text text-white">
                <h4>Get In Touch</h4>
                <img
                  className="profile-pic"
                  src={'https://picsum.photos/300/300'}
                  alt="Tim Baker Profile Pic"
                />
                <h5><strong>Email</strong></h5> <a href={`mailto:${data !== undefined && data.email}`}>{data !== undefined && data.email}</a>
                <h5><strong>City</strong> </h5><p>{data !== undefined && data.address.city}  </p>
                <h5><strong>Website</strong> </h5><p>{data !== undefined && data.website}  </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
