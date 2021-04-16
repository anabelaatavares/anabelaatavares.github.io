import React, { Component } from "react";
import Typewriter from 'typewriter-effect'

class Home extends Component {
  randomBubbles(bubbles) {
    const bubblesChild = []
    for (let index = 0; index < bubbles; index++) {
      bubblesChild.push(<span
        className={`animated fadeIn move-${Math.floor(Math.random() * 10) % 2 === 0 ? 'up' : 'down'} float-image`}
        style={{
          left: `${index * 0.5}%`,
          bottom: `${Math.random() *
            (index % 2 === 0 ? 100 : -100)}%`,
        }}
        key={index}
      />)
    }
    return bubblesChild
  }

  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var profilepic = "images/" + this.props.data.image;
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
      <section className="hero" id={this.props.id}>
        <div className="row">
          <div className="col-12">
            <div className="content">
              <div className="content-text">
                <div className="line-text with-after">
                  <h1>Hello, I'm <span>{name}</span> </h1>
                  <Typewriter
                    options={{
                      strings: [
                        'Mobile Developer',
                        'Web Developer'
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
                <button className="hover-button">
                  <span>Download CV</span>
                </button>
                {/**/}
                <div className="bubbles">
                  {this.randomBubbles(200)}

                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-6">
            <div className="img">
              <img
                className="img-fluid"
                src={'https://picsum.photos/1000/800'}
                alt="person"
              />
            </div>
          </div> */}
        </div>

      </section>
    );
  }

}

export default Home;
