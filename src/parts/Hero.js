import React from "react";
import ImageHero from "assets/images/banner-img.png";
import ImageFrame from "assets/images/banner-img-frame.png";
import IconTraveler from "assets/icons/icon_traveler.svg";
import IconPlace from "assets/icons/icon_places.svg";
import IconCountry from "assets/icons/icon_country.svg";
import Button from "elements/Button";

export default function Hero(props) {

    function showPopular () {
        window.scrollTo()
    }

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 555 }}>
          <h1 className="h2 font-weight-bold line-height-1 mb-3">
            Take your time,
            <br />
            and vacation with your family
          </h1>
          <p className="mb-5 font-weight-light text-gray-500 w-75">
            we provide what you need to enjoy your vacation with your family.
            It's time to create new moments with family.
          </p>
          <Button className="btn px-5" hasShadow isPrimary onClick={showPopular}>Show Me Now</Button>
        </div>
      </div>
    </section>
  );
}
