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
      phone :""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, address, basket, phone} = this.state;
    console.log(fname, lname, address);

    fetch("http://localhost:8081/form", {
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
        phone
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
      localStorage.removeItem("basket");
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
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Your phone.."
            onChange={(e) => this.setState({ phone: e.target.value })}
            required
          />

          {!(
            this.state.address.length &&
            this.state.fname &&
            this.state.lname &&
            this.state.phone
          ) ? (
            <p></p>
          ) : (
            <input onClick={redirect} type="submit" value="Commander" />
            )}
        </form>
        <div className="basket">
          <h2 className="text-lg	">Votre commande</h2>
          <hr/>
          <div className="product-command">
            {panier.basket.map((item, i) => (
              <p name={panier.basket[i]} key={i}>
                {panier.basket[i]} {panier.basketPrice[i]}€

              </p>
            ))}
          </div>
          <hr/>
          <h3>Total : {panier.totalPrice}€</h3>
        </div>
      </div>
    );
  }
}
