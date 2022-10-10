import React, { Component } from "react";
import "../style/Signup.scss";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      mail: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, mail, password } = this.state;
    console.log(fname, lname, mail, password);

    fetch("http://localhost:8081/sign-up", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        lname,
        mail,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.status==="ok"){
          window.location.href="./login"

        }
        console.log(data);
      });
  }

  render() {
    return (
      <div>

        <div className="sign">
            
          <div className="main">
            <h1>SIGN-UP</h1>
            <form
              className="form-signup"
              onSubmit={(e) => this.handleSubmit(e)}
            >
              <label htmlFor="fname">First name:</label>
              <input
                type="text"
                id="fname"
                name="fname"
                onChange={(e) => this.setState({ fname: e.target.value })}
                required
              />

              <label htmlFor="lname">Last name:</label>
              <input
                type="text"
                id="lname"
                name="lname"
                onChange={(e) => this.setState({ lname: e.target.value })}
                required
              />

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
            <a className="home" href="/">Home</a>
            <a className="login" href="/login">Log in</a>


            </div>

          </div>
        </div>
      </div>
    );
  }
}
