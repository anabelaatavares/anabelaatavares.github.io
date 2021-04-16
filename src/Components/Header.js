import React, { Component } from "react";
import Navigation from './navigation/index'

class Header extends Component {
  render() {
    return (
      <header id={this.props.id}>
        <Navigation></Navigation>
      </header>
    );
  }
}

export default Header;
