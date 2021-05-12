import React, { Component } from "react";
import Header from "parts/Header";
import landingPage from "json/landingPage";
import Hero from "parts/Hero";
import Popular from "parts/Popular";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero data={landingPage.hero} />
        <Popular data={landingPage.popular} />
      </>
    );
  }
}
