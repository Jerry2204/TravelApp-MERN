import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'parts/Header';
import { fetchPage } from 'store/actions/page';
import Hero from 'parts/Hero';
import Popular from 'parts/Popular';
import Categories from 'parts/Categories';
import Testimoni from 'parts/Testimoni';
import Footer from 'parts/Footer';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refPopular = React.createRef();
  }

  componentDidMount() {
    window.title = 'Staycation | Home';
    window.scrollTo(0, 0);

    if (!this.props.landingPage)
      this.props.fetchPage(
        `https://admin-booking-accomodation.herokuapp.com/api/landing-page`,
        'landingPage'
      );
  }

  render() {
    const { page } = this.props;

    return (
      <>
        <Header {...this.props} />
        <Hero refPopular={this.refPopular} data={page.hero} />
        <Popular refPopular={this.refPopular} data={page.popular} />
        <Categories data={page.categories} />
        <Testimoni data={page.testimonial}></Testimoni>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page ? state.page.landingPage : null,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
