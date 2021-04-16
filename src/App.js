import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Layout from "./Components/layout";
import axios from "axios";
import Spinner from "./Components/spinner";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
      done: false
    };
  }

  componentDidMount() {
    this.getResumeData();
  }

  getResumeData() {
    const self = this
    axios.get('/resumeData.json')
      .then(function (response) {
        self.setState({ resumeData: response.data, done: true });
      }).catch((error) => {
        throw error
      })
  }


  render() {
    const { resumeData, done } = this.state


    return (
      <div className="App">
        <Header />
        <Layout>
          <Home id="home" data={resumeData.main} />
          <About id="about" data={resumeData.main} />
          <Footer id="contact" data={resumeData.main} />
          {/* <Spinner duration={1500} done={done} /> */}
        </Layout>
      </div>

    );
  }
}

export default App;
