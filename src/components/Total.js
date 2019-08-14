import React from "react";

const Total = props => {
  return (
    <React.Fragment>
      <div className="content">
        <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
      </div>
    </React.Fragment>
  );
};

export default Total;
