import React, { Component, useMemo } from "react";
import Products from "../Products.json";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default class State extends Component {
  state = {
    name: "Shabana",
    password: 25,
    product: Products,
    show: false,
    count: 10,
  };
  render() {
    const Changethetext = () => {
      this.setState({
        name: "Anjum",
        password: "Kohli",
      });
    };
    // console.log(this.state.product);

    const AddCount = () => {
      console.log("*sebf****");

      this.setState({
        count: this.state.count + 1,
      });
    };
    const RemoveCount = () => {
      this.setState({
        count: this.state.count > 1 ? this.state.count - 1 : this.state.count,
      });
    };

    const ChangeIcon = () => {
      this.setState({
        show: this.state.show === false ? true : false,
      });
    };
    return (
      <>
        <h1 className="display-1">
          Welcome {this.state.name} to the States Page
        </h1>
        {/* {this.state.password}
        <button className="btn btn-primary" onClick={Changethetext}>
          Click to change
        </button>

        {this.state.show === true ? "Yes" : "No"} */}

        <button className="btn btn-success" onClick={RemoveCount}>
          -
        </button>
        <span>{this.state.count}</span>
        <button className="btn btn-danger" onClick={AddCount}>
          +
        </button>

        <div className="container align-items-center d-flex">
          <input
            type={this.state.show === true ? "text" : "password"}
            className="form-control w-50"
          />
          <span onClick={ChangeIcon}>
            {this.state.show === true ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </>
    );
  }
}

// function Com(){
