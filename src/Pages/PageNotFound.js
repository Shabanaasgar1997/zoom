import React from "react";
import { useParams } from "react-router-dom";

function PageNotFound() {
  let id = useParams();
  console.log(id);
  console.log(id.virat);
  return (
    <div className="container-fluid text-center">
      <h1 className="display-1">
        OOPS! <br /> <span className="text-danger">{id.virat}</span> <br /> PAGE
        NOT FOUND
      </h1>
    </div>
  );
}

export default PageNotFound;
