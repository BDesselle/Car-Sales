import React from "react";
// Components
import AddedFeature from "./AddedFeature";

const AddedFeatures = props => {
  return (
    <React.Fragment>
      <div className="content">
        <h6>Added features:</h6>
        {props.car.features.length ? (
          <ol type="1">
            {props.car.features.map(item => (
              <AddedFeature key={item.id} feature={item} />
            ))}
          </ol>
        ) : (
          <p>You can purchase items from the store.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default AddedFeatures;
