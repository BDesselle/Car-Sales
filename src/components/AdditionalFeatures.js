import React from "react";
// Components
import AdditionalFeature from "./AdditionalFeature";

const AdditionalFeatures = props => {
  return (
    <React.Fragment>
      <div className="content">
        <h4>Additional Features</h4>
        {props.store.length ? (
          <ol type="1">
            {props.store.map(item => (
              <AdditionalFeature key={item.id} feature={item} />
            ))}
          </ol>
        ) : (
          <p>Nice looking car!</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default AdditionalFeatures;
