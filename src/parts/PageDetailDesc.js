import React from "react";
import parse from "html-react-parser";

export default function PageDetailDesc({ data }) {
  return (
    <main>
      <h4>About The Place</h4>
      {parse(data.description)}
      <div className="row" style={{ marginTop: 30 }}>
        {data.features.map((feature, index) => {
          return (
            <div
              className="col-3"
              key={`featured-${index}`}
              style={{ marginBottom: 20 }}
            >
              <img
                src={feature.imageUrl}
                alt={feature.name}
                width="38"
                className="d-block mb-2"
              />
              <span>{feature.qty} </span>
              <span className="text-gray-500 font-wight-light">
                {feature.name}
              </span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
