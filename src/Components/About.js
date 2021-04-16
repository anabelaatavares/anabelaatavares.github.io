import React, { Component } from "react";
import Progress from './progress/index'

class About extends Component {


  renderSkills() {
    var skills = this.props.data.skills;
    const skill = []
    skills.map((skills) => {
      skill.push(<Progress key={skills.name} name={skills.name} value={skills.level} delay={1100} />)
    })

    return skill
  }

  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var description = this.props.data.description;
      var skills = this.props.data.skills;
      var bio = this.props.data.bio;
      var networks = this.props.data.social;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }


    return (
      <section id={this.props.id} className="section-about">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="content-text">
                <div className="line-text">
                  <h4>About Me</h4>
                </div>
                <h3>{description}</h3>
                <div className="separator" />
                <p>{bio}</p>
              </div>
              <img
                className="profile-pic"
                src={profilepic}
                alt="Tim Baker Profile Pic"
              />

              <div className="social social_icons">
                {networks !== undefined &&
                  networks.map((network) => {
                    return <a key={network.className} className="social_icon" href={network.url}>
                      <span className={network.className}></span>
                    </a>
                  })
                }
              </div>
            </div>
            <div className="col-5 offset-2 content-change-color">
              <div className="line-text">
                <h4>My Skills</h4>
              </div>
              <div className="skills-container">
                {skills !== undefined &&
                  skills.map((skills) => {
                    return <Progress key={skills.name} name={skills.name} value={skills.level} delay={1100} />
                  })
                }
              </div>


              {/* <div className="row">
                <div className="col-12 columns main-col">
                  <h2>About Me</h2>
                  <p>{bio}</p>
                </div>

                <div className="col-6 columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="col-6 columns download">
                  <a href={resumeDownload} className="btn btn-default btn-download">
                    <i className="fa fa-download"></i>Download Resume
                    </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
