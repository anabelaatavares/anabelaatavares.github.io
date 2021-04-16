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
    const { data } = this.props

    return (
      <section className="hero" id={this.props.id}>
        <div className="row no-gutters">
          <div className="col-12">
            <div className="content">
              <div className="content-text">
                <div className="line-text with-after">
                  <h1>Hello, I'm <span>{data !== undefined && data.name}</span> </h1>
                  <Typewriter
                    options={{
                      strings: data !== undefined && data.occupation,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
                <a href={data !== undefined && `documents/${data.resumedownload.url}`} className="hover-button">
                  <span>{data !== undefined && data.resumedownload.id }</span>
                </a>
                <div className="bubbles">
                  {this.randomBubbles(200)}
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }

}

export default Home;
