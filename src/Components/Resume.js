import React, { Component } from "react";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
    };
  }

  componentDidUpdate = (prevProps) => {
    const { data } = this.props
    if (prevProps.data !== data) {
      this.setState({ data: data })
    }
  }

  render() {
    const { data } = this.state

    return (
      <section id={this.props.id}>
        <div className="container">
          <div className="row education">
            <div className="col-3 columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="col-9 columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  {
                    data !== undefined && data.education.map(function (education) {
                      return (
                        <div key={education.id}>
                          <h3>{education.school}</h3>
                          <p className="info">
                            {education.degree} <span>&bull;</span>
                            <em className="date">{education.graduated}</em>
                          </p>
                          <p>{education.description}</p>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="row work">
            <div className="col-3 columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="col-9 columns main-col">{
              data !== undefined && data.work.map(function (work) {
                return (
                  <div key={work.company}>
                    <h3>{work.company}</h3>
                    <p className="info">
                      {work.title}
                      <span>&bull;</span> <em className="date">{work.years}</em>
                    </p>
                    <p>{work.description}</p>
                  </div>
                );
              })
            }</div>
          </div>

          <div className="row skill">
            <div className="col-3 columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="col-9 columns main-col">
              <p>{data !== undefined && data.skillmessage}</p>

              <div className="bars">
                {/* <ul className="skills">{
                  data !== undefined && data.skills.map(function (skills) {
                    var className = "bar-expand " + skills.name.toLowerCase();
                    return (
                      <li key={skills.name}>
                        <span style={{ width: skills.level }} className={className}></span>
                        <em>{skills.name}</em>
                      </li>
                    );
                  })
                }</ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
