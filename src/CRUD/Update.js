import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Update() {
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setUsername(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setPassword(localStorage.getItem("pswd"));
  }, []);

  const Updaterecord = (e) => {
    e.preventDefault();
    axios
      .put(`https://68495a7245f4c0f5ee71101b.mockapi.io/studentdetails/${id}`, {
        name: username,
        mail: email,
        pswd: password,
      })
      .then(() => {
        alert("Successfully Updated");
        navigate("/read");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <div className="container">
        <button className="btn btn-warning">
          <Link to={"/read"}>Back</Link>
        </button>
        <form action="" className="w-50 mx-auto" onSubmit={Updaterecord}>
          <label htmlFor="">ID</label>
          <input
            type="text"
            className="form-control"
            value={id}
            readOnly
            disabled
          />

          <label htmlFor="">USERNAME</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="">EMAIL</label>
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="">PASSWORD</label>
          <input
            type="text"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input type="submit" value="Update" className="btn btn-info" />
        </form>
      </div>
    </>
  );
}

export default Update;
