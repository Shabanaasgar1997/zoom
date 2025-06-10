import React, { Component } from "react";
import { MdError } from "react-icons/md";

export default class Formvalidation extends Component {
  state = {
    username: "",
    password: "",
    error: false,
  };
  render() {
    const Validate = (e) => {
      e.preventDefault();
      console.log("********", this.state.username, this.state.password);
      if (this.state.error === false) {
        this.setState({ error: true });
      } else {
        this.setState({ error: false });
      }
    };
    return (
      <>
        <div className="container w-50">
          <form action="" onSubmit={Validate}>
            <label htmlFor="" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              value={this.state.username}
              onChange={(e) =>
                this.setState({
                  username: e.target.value,
                })
              }
            />

            {/* {this.state.username.length >= 1 ? (
              <p>{this.state.username}</p>
            ) : (
              <p>Please Enter the username</p>
            )} */}

            {/* {this.state.username.length < 1 ? (
              <p>Error</p>
            ) : (
              <p>{this.state.username}</p>
            )} */}
            {this.state.error === true ? (
              <p className="text-danger">
                <MdError />
                Please enter username
              </p>
            ) : (
              <p>{this.state.username}</p>
            )}

            <label htmlFor="" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              value={this.state.password}
              onChange={(e) =>
                this.setState({
                  password: e.target.value,
                })
              }
            />
            {this.state.error === true ? (
              <p>Please enter Password</p>
            ) : (
              <p>{this.state.password}</p>
            )}
            <button
              type="submit"
              className="btn btn-info my-lg-2 d-flex mx-auto"
            >
              submit
            </button>
          </form>
        </div>
      </>
    );
  }
}
