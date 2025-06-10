import React from "react";

function Services(props) {
  return (
    <div>
      <h1 className="display-1">WELCOME TO THE SERVICES PAGE</h1>
      <h3>{props.props1}</h3>
      <h3>{props.props2}</h3>
    </div>
  );
}

export default Services;
