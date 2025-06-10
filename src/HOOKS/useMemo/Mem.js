import React, { useMemo, useState } from "react";

function Mem() {
  const [count, setCount] = useState(1);
  const Add = () => {
    setCount(count + 1);
  };

  //   const Multiply = () => {
  //     console.log("***********welcome to the memo**********");
  //   };
  const Multiply = useMemo(() => {
    console.log("***********welcome to the memo**********");
  }, []);
  return (
    <>
      {Multiply}
      <div className="container">
        <h5>{count}</h5>
        <button className="btn btn-danger" onClick={Add}>
          +
        </button>
      </div>
    </>
  );
}

export default Mem;
