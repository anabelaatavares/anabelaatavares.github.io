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
    const { data } = this.props

    // var profilepic = "images/" + this.props.data.image;

    return (
      <section id={this.props.id} className="section-about">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5">
              <div className="content-text">
                <div className="line-text">
                  <h4>About Me</h4>
                </div>
                <h3>{data !== undefined && data.description}</h3>
                <div className="separator" />
                <p>{data !== undefined && data.bio}</p>
              </div>
              <div className="social social_icons">
                {data !== undefined && data.social !== undefined &&
                  data.social.map((network) => {
                    return <a key={network.className} className="social_icon" href={network.url}>
                      <span className={network.className}></span>
                    </a>
                  })
                }
              </div>
            </div>
            <div className="col-12 col-lg-5 offset-lg-2 content-change-color">
              <div className="line-text">
                <h4>My Skills</h4>
              </div>
              <div className="skills-container">
                {data !== undefined && data.skills !== undefined &&
                  data !== undefined && data.skills.map((skill) => {
                    return <Progress key={skill.name} name={skill.name} value={skill.level} delay={1100} />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
