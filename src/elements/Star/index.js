import React from "react";
import propTypes from "prop-types";

export default function Star({ value, height, width, spacing }) {
  const decimals = Number(value) % 1;
  const start = [];
  let leftPos = 0;

  for (let index = 0; index < 5 && index < value - decimals; index++) {
    leftPos = leftPos + width;
    start.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{ left: index * width, width: width, marginRight: spacing }}
      ></div>
    );
  }

  if (decimals > 0 && value <= 5) {
    star.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{ left: leftPos, width: width - spacing }}
      ></div>
    );
  }

  const starPlaceHolder;

  return <div></div>;
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  height: propTypes.number,
  width: propTypes.number,
  spacing: propTypes.number,
};