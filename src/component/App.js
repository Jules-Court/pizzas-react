import React, { Component } from "react";
import "../style/App.css";

import csv from "../csv/csvjson.json";
import csvPizza from "../csv/pizza.json";
import csvBoisson from "../csv/boisson.json";
// import csvEntree from './csv/entree.json'
import csvDessert from "../csv/dessert.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      basket: [],
      basketPrice: [],
      totalPrice: 0
    };
  }

  // LifeCycle
  componentDidMount = () => {
    this.basket = JSON.parse(localStorage.getItem("basket"));

    if (localStorage.getItem("basket")) {
      this.setState({
        basket: this.basket.basket,
        basketPrice: this.basket.basketPrice,
        totalPrice: this.basket.totalPrice,
      });
    } else {
      this.setState({
        basket: [],
        basketPrice: [],
        totalPrice: 0,
      });
    }
  };
  componentWillUpdate = (nextProps, nextState) => {
    localStorage.setItem("basket", JSON.stringify(nextState));
  };

  // Add product to basket
  handleClick = (event, param, price) => {
    this.setState((prevState) => ({
      basket: [...prevState.basket, param],
      basketPrice: [...prevState.basketPrice, price],
      totalPrice: this.state.totalPrice + price,
    }));
  };

  // Remove product from basket
  removeProduct = (remove, param, param2, price) => {
    if (this.state.basket[param] === param2) {
      this.state.basket.splice(param, 1);
    }
    if (this.state.basketPrice[param] === price) {
      this.state.basketPrice.splice(param, 1);
    }

    this.setState((prevState) => ({
      basket: this.state.basket,
      basketPrice: this.state.basketPrice,
      totalPrice: this.state.totalPrice - price,
    }));
  };

  render() {
    var url = window.location.href;
    const found = url.match(/.*\/.*\/(.*)/);
    for (let i = 0; i < csv.length; i++) {
      if (found[1] === csv[i].categorie && found[1] === "pizza") {
        csv = csvPizza;
      } else if (found[1] === csv[i].categorie && found[1] === "dessert") {
        csv = csvDessert;
      } else if (found[1] === csv[i].categorie && found[1] === "boisson") {
        csv = csvBoisson;
      }
    }

    return (
      <div className="App">
        <div className="parent">
          <div className="div1">
            <ul>
              {/* <li>
                <a href="/menu"> Menus</a>
              </li>
              <li>
                <a href="/entree"> Entrées</a>
              </li> */}
              <li>
                <a href="/pizza"> Pizzas</a>
              </li>
              <li>
                <a href="/dessert"> Desserts</a>
              </li>
              <li>
                <a href="/boisson"> Boissons</a>
              </li>
            </ul>

            <div className="barre"></div>
            <div className="basket-product<">
              <h3>Panier</h3>
              <div className="buy-product">
                <div className="product-buy-basket">
                  {this.state.basket.map((item, i) => (
                    <p name={this.state.basket[i]} key={i}>
                      {this.state.basket[i]} {this.state.basketPrice[i]}€
                      <button
                        className="product-remove"
                        onClick={(event) =>
                          this.removeProduct(
                            event,
                            i,
                            this.state.basket[i],
                            this.state.basketPrice[i]
                          )
                        }
                      >
                        X
                      </button>
                    </p>
                  ))}
                </div>
              </div>

              <div className="total-price">
                <div className="wrapper">
                  <a {... this.state.totalPrice > 0 ? {href: "/form"} : {href: "/app"}}>
                    <button className="commande-button">
                      Commander {this.state.totalPrice}€
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="div2">
            <h1>PizzaS</h1>
            <div className="contains">
              {csv.map((data, key) => {
                return (
                  <div className="product" key={key}>
                    <div className="">
                      <img
                        className="img-product"
                        alt={data.nom}
                        src={data.url}
                        title={data.prix + "€"}
                      ></img>
                    </div>
                    <button
                      className="add-product"
                      onClick={(event) =>
                        this.handleClick(event, data.nom, data.prix)
                      }
                    >
                      Ajouter {data.prix}€
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
