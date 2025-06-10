import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Count() {
  const [count, setCount] = useState(0);
  const [winnername, setWinnername] = useState("IPL WINNER");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [price, setPrice] = useState(10);
  const [handlingerror, setHandlingerror] = useState(false);

  const Addthecount = () => {
    setCount(count + 1);
  };
  const Removethecount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const Showthewiner = () => {
    setWinnername("KINGS 11 PUNJAB");
  };
  const Validatetheform = (e) => {
    e.preventDefault();
    console.log("welcome to the form", username);
    if (handlingerror === false) {
      setHandlingerror(true);
    } else {
      setHandlingerror(false);
    }
  };

  const IconChange = () => {
    if (handlingerror === false) {
      setHandlingerror(true);
    } else {
      setHandlingerror(false);
    }
  };
  return (
    <>
      <h1>Welcome to the useState Concept</h1>

      <div className="container w-50">
        <form action="" onSubmit={Validatetheform}>
          <label htmlFor="">Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {handlingerror === false ? (
            <p>Please enter the username</p>
          ) : (
            <p>{username}</p>
          )}

          <label htmlFor="">Password</label>
          <input
            type={handlingerror === false ? "text" : "password"}
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={IconChange}>
            {handlingerror === false ? <FaEye /> : <FaEyeSlash />}
          </span>
          {handlingerror === false ? (
            <p>{password}</p>
          ) : (
            <p>Please enter password</p>
          )}
          <button type="submit" className="btn btn-info d-flex mx-auto ml-lg-3">
            Submit
          </button>
        </form>
      </div>

      <h1
        className="text-danger"
        style={{ fontFamily: "Poppins", textDecoration: "underline" }}
      >
        {winnername === "KINGS 11 PUNJAB"
          ? "RCB is the runner up"
          : "PUNJAB WINS THE GAME"}{" "}
      </h1>
      <button className="btn btn-primary" onClick={Showthewiner}>
        Click
      </button>
      <div className="container">
        <button className="btn btn-danger" onClick={Removethecount}>
          -
        </button>
        <span>{count}</span>
        <button className="btn btn-success" onClick={Addthecount}>
          +
        </button>

        <h5>
          Price: <span>{count * price}</span>
        </h5>
      </div>
    </>
  );
}

export default Count;
