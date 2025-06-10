import React, { useReducer, useState } from "react";

const initialState = 1;

const reducers = (state, action) => {
  switch (action) {
    case "Increase":
      return state + 1;
    case "Decrease":
      return state - 1;
    case "Multiply":
      return state * 10;
    default:
      return state;
  }
};

function Red() {
  const [count, dispatch] = useReducer(reducers, initialState);

  const [depositamount, setDepositAmount] = useState();
  const [opiningbalance, setOpiningbalance] = useState(4000);
  const Deposit = () => {
    console.log(depositamount + opiningbalance);
  };
  return (
    <>
      <h5>
        Initial State : <span>{opiningbalance + depositamount}</span>
      </h5>
      <form action="" className="w-50">
        <input
          type="number"
          className="form-control"
          onChange={(e) => setDepositAmount(e.target.value)}
        />
        <button className="btn btn-warning" type="button" onClick={Deposit}>
          Deposit
        </button>
      </form>

      <div className="container">
        <button className="btn btn-danger" onClick={() => dispatch("Decrease")}>
          -
        </button>
        <span>{count}</span>
        <button
          className="btn btn-success"
          onClick={() => dispatch("Increase")}
        >
          +
        </button>

        <button
          onClick={() => dispatch("Multiply")}
          className="btn btn-primary"
        >
          Price
        </button>
      </div>
    </>
  );
}

export default Red;
