import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
  render() {
    var panier = [];
    panier = JSON.parse(localStorage.getItem("basket"));
    return (
      <div className="form">
        <h1 className="form-title">PizzaS</h1>
        <a href="/app">
          <button className="return">Retour</button>
        </a>
        <form action="/action_page.php">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label htmlFor="addresse">Address</label>
          <input
            type="text"
            id="address"
            name="Address"
            placeholder="Your address.."
          />

          <input type="submit" value="Commander" />
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
