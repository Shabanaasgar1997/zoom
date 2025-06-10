import React, { createContext } from "react";
import Child1 from "./Child1";

const rcb = createContext();
const srh = createContext();

function Parent() {
  let name = "dheeraj";
  let age = 45;
  return (
    <>
      <rcb.Provider value={name}>
        <srh.Provider value={age}>
          <Child1 prop1={name} />
        </srh.Provider>
      </rcb.Provider>
    </>
  );
}

export default Parent;

export { rcb, srh };
