import React, { Component } from "react";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { mail, password } = this.state;
    // console.log(this.state);

    fetch("http://localhost:8081/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        mail,
        password,
       }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if(data.status==="ok"){
          alert("login success")
          window.localStorage.setItem("token", data.data)
          window.location.href="./my-delivery"
        }else{
          alert("error")
        }
      });
  }

  render() {
    return (
      <div>
        <div className="sign">
          <div className="main">
            <h1>LOG-IN</h1>
            <form
              className="form-signup"
              onSubmit={(e) => this.handleSubmit(e)}
            >
              <label htmlFor="lname">Mail:</label>
              <input
                type="mail"
                id="mail"
                name="mail"
                onChange={(e) => this.setState({ mail: e.target.value })}
                required
              />
              <label htmlFor="lname">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => this.setState({ password: e.target.value })}
                required
              />

              <input type="submit" value="Submit" />
            </form>
            <div className="navigation-sign">
              <a className="home" href="/">
                Home
              </a>
              <a className="sign-up" href="/sign-up">
                Sign-up
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
