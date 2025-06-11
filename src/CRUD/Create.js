import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let URL = "https://68495a7245f4c0f5ee71101b.mockapi.io/studentdetails";

  let navigate = useNavigate();

  const Sendtoapi = (e) => {
    e.preventDefault();
    console.log(username, email, password);
    axios
      .post(URL, {
        name: username,
        mail: email,
        pswd: password,
      })
      .then(() => {
        alert("Successfully Created the account");
        navigate("/read");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <h1 className="display-1">Welcome to the application</h1>
      <div className="container ">
        <form action="" className="w-50 mx-auto" onSubmit={Sendtoapi}>
          <label htmlFor="" className="fom-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="" className="fom-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="" className="fom-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* <label htmlFor="" className="form-label">
            Post
          </label>
          <textarea
            name=""
            id=""
            className="form-control"
            cols={10}
            rows={10}
          ></textarea> */}
          <input
            type="submit"
            value="Signup"
            className="btn btn-warning mx-auto my-lg-2 d-flex"
          />
        </form>
      </div>
    </>
  );
}

export default Create;
