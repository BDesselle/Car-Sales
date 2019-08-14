import React from "react";

const AddedFeature = props => {
  return (
    <React.Fragment>
      <li>
        {/* Add an onClick to run a function to remove a feature */}
        <button className="button">X</button>
        {props.feature.name}
      </li>
    </React.Fragment>
  );
};

export default AddedFeature;
