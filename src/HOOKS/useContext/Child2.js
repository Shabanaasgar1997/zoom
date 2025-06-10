import React, { useContext } from "react";
import Child3 from "./Child3";
import { rcb, srh } from "./Parent";

function Child2() {
  let na = useContext(rcb);
  let age = useContext(srh);
  return (
    <>
      <h1 className="display-1">{na}</h1>
      <h1 className="display-4">{age}</h1>
      <Child3 />
    </>
  );
}

export default Child2;
