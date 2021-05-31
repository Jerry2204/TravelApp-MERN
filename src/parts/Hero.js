import React from "react";
import ImageHero from "assets/images/banner-img.png";
import ImageFrame from "assets/images/banner-img-frame.png";
import IconTraveler from "assets/icons/icon_traveler.svg";
import IconPlace from "assets/icons/icon_places.svg";
import IconCountry from "assets/icons/icon_country.svg";
import Button from "elements/Button";
import numberFormat from "utils/FormatNumber";
import Fade from "react-reveal/Fade";

export default function Hero(props) {
  function showPopular() {
    window.scrollTo({
      top: props.refPopular.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Take your time,
              <br />
              and vacation with your family
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              we provide what you need to enjoy your vacation with your family.
              It's time to create new moments with family.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showPopular}
            >
              Show Me Now
            </Button>

            <div className="row" style={{ marginTop: "80px" }}>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="32"
                  height="32"
                  src={IconTraveler}
                  alt={`${props.data.travelers} Travelers`}
                />
                <h6 className="mt-3">
                  {numberFormat(props.data.travelers)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="32"
                  height="32"
                  src={IconPlace}
                  alt={`${props.data.places} Places`}
                />
                <h6 className="mt-3">
                  {numberFormat(props.data.places)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Places
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  width="32"
                  height="32"
                  src={IconCountry}
                  alt={`${props.data.country} Country`}
                />
                <h6 className="mt-3">
                  {numberFormat(props.data.country)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Countries
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-auto pl-5">
            <div className="image-hero" style={{ width: 500, height: 455 }}>
              <img
                src={ImageHero}
                className="img-fluid position-absolute"
                alt="Room With Couches"
                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
              />
              <img
                src={ImageFrame}
                className="img-fluid position-absolute"
                alt="Room With Couches frame"
                style={{ margin: "0 -15px -15px 0px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
