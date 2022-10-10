import React, { Component } from "react";
import "../style/Connect.scss";

export default class SignIn extends Component {
  render() {
    return (
        <div>
      <div className="all">
        <div className="main">
          <div className="button">
            <a href="/sign-up" className="">
              <button className="btn-connect">Sign-up</button>
            </a>
            <a href="/login" className="">
              <button className="btn-connect">Login</button>{" "}
            </a>
          </div>

        </div>
        </div>
        <a href="/">Home</a>
      </div>
    );
  }
}
