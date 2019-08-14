import React from "react";

const AddedFeature = props => {
  return (
    <React.Fragment>
      <li>
        <button
          onClick={() => props.removeFeature(props.feature)}
          className="button"
        >
          X
        </button>
        {props.feature.name}
      </li>
    </React.Fragment>
  );
};

export default AddedFeature;
