import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from 'parts/Header';
import Hero from 'parts/Hero';
import Popular from 'parts/Popular';
import Categories from 'parts/Categories';
import Testimoni from 'parts/Testimoni';
import Footer from 'parts/Footer';

import { fetchPage } from 'store/actions/page';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refPopular = React.createRef();
  }

  componentDidMount() {
    window.title = 'Staycation | Home';
    window.scrollTo(0, 0);

    if (!this.props.page.landingPage)
      this.props.fetchPage(
        `${process.env.REACT_APP_HOST}/api/landing-page`,
        'landingPage'
      );
  }

  render() {
    const { page } = this.props;

    console.log(page);

    if (!page.hasOwnProperty('landingPage')) return null;
    return (
      <>
        <Header {...this.props} />
        <Hero refPopular={this.refPopular} data={page.landingPage.hero} />
        <Popular
          refPopular={this.refPopular}
          data={page.landingPage.mostPicked}
        />
        <Categories data={page.landingPage.category} />
        <Testimoni data={page.landingPage.testimonial}></Testimoni>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
