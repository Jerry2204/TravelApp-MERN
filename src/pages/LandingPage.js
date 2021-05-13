import React, { Component } from "react";
import Header from "parts/Header";
import landingPage from "json/landingPage";
import Hero from "parts/Hero";
import Popular from "parts/Popular";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refPopular = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero refPopular={this.refPopular} data={landingPage.hero} />
        <Popular refPopular={this.refPopular} data={landingPage.popular} />
      </>
    );
  }
}
