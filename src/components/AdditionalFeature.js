import React from "react";

const AdditionalFeature = props => {
  return (
    <React.Fragment>
      <li>
        {/* Add an onClick that will let you add a feature to your car */}
        <button className="button">Add</button>
        {props.feature.name} (+{props.feature.price})
      </li>
    </React.Fragment>
  );
};

export default AdditionalFeature;
