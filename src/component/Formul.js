import React, { Component } from "react";
import "../style/Form.css";

export default class Formul extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      address: "",
      basket: JSON.parse(localStorage.getItem("basket")),
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, address, basket } = this.state;
    console.log(fname, lname, address);

    fetch("http://localhost:8080/form", {
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
        address,
        basket,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "Command Send !");
      });
  }

  render() {
    var panier = [];
    panier = JSON.parse(localStorage.getItem("basket"));

    function redirect() {
      localStorage.clear();
      window.location.href = "/";

    }
    return (
      <div className="form">
        <h1 className="form-title">PizzaS</h1>
        <a href="/app">
          <button className="return">Retour</button>
        </a>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
            onChange={(e) => this.setState({ fname: e.target.value })}
            required
          />

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
            onChange={(e) => this.setState({ lname: e.target.value })}
            required
          />

          <label htmlFor="addresse">Address</label>
          <input
            type="text"
            id="address"
            name="Address"
            placeholder="Your address.."
            onChange={(e) => this.setState({ address: e.target.value })}
            required
          />
          {!(
            this.state.address.length &&
            this.state.fname &&
            this.state.lname
          ) ? (
            <p></p>
          ) : (
            <input onClick={redirect} type="submit" value="Commander" />
            )}
        </form>
        <div className="basket">
          <h2>Votre commande</h2>
          <div className="product-command">
            {panier.basket.map((item, i) => (
              <p name={panier.basket[i]} key={i}>
                {panier.basket[i]} {panier.basketPrice[i]}€
              </p>
            ))}
          </div>
          <h3>Total : {panier.totalPrice}</h3>
        </div>
      </div>
    );
  }
}
