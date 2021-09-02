import React from "react";
import propTypes from "prop-types";
import "./index.scss";

export default function File(props) {
  const {
    value,
    placeholder,
    name,
    accept,
    prepend,
    append,
    outerClassName,
    inputClassName,
  } = props;

  const refInputFile = useRef(null);

  return <div></div>;
}

File.defaultProps = {
  type: "text",
  pattern: "",
  placeholder: "Browse a file...",
};

// File.propTypes = {
//     name: propTypes.
// }
