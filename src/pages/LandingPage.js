import React, { Component } from "react";
import Header from "parts/Header";
import landingPage from "json/landingPage";
import Hero from "parts/Hero";
import Popular from "parts/Popular";
import Categories from "parts/Categories";
import Testimoni from "parts/Testimoni";
import Footer from "parts/Footer";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refPopular = React.createRef();
  }

  componentDidMount() {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero refPopular={this.refPopular} data={landingPage.hero} />
        <Popular refPopular={this.refPopular} data={landingPage.popular} />
        <Categories data={landingPage.categories} />
        <Testimoni data={landingPage.testimonial}></Testimoni>
        <Footer />
      </>
    );
  }
}
