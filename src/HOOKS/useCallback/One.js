import React, { useCallback, useState } from "react";
import Two from "./Two";

function One() {
  const [count, setCount] = useState(1);
  const Add = () => {
    setCount(count + 1);
  };

  //   const Example = () => {};

  const Example = useCallback(() => {}, []);
  return (
    <>
      <Two prop1={Example} />
      <h5>{count}</h5>
      <button className="btn btn-warning" onClick={Add}>
        +
      </button>
    </>
  );
}

export default One;
