import React, { Component } from "react";
import "../style/App.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

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
      totalPrice: 0,
      openModal: false,
    };
  }
  onClickButton = (e) => {
    e.preventDefault();
    this.setState({ openModal: true });
  };

  onCloseModal = () => {
    this.setState({ openModal: false });
  };

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
        <div className="livreur-container">
          <nav id="menu">
            <input type="checkbox" id="responsive-menu" />
            <label></label>
            <ul>
              <li>
                <a href="/pizza">Pizza</a>
              </li>
              <li>
                <a href="/dessert">Dessert</a>
              </li>
              <li>
                <a href="/boisson">Boisson</a>
              </li>
              <li>
                <button
                  className=" fixblock w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                  data-modal-toggle="small-modal"
                  onClick={this.onClickButton}
                >
                  <svg
                    aria-hidden="true"
                    class="mr-2 -ml-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div class="block space-y-4 md:flex md:space-y-0 md:space-x-4">
          <Modal open={this.state.openModal} onClose={this.onCloseModal}>
            <h3 className="font-bold mb-6 text-center text-xl">Panier</h3>
            <div className="">
              <div className="">
                {this.state.basket.length > 0 ? (
                  this.state.basket.map((item, i) => (
                    <p name={this.state.basket[i]} key={i}>
                      {this.state.basket[i]} {this.state.basketPrice[i]}€
                      <button
                        className="rm-product-btn bg-white transform border-2 w-6 h-6 rounded-full text-red-500 border-red-500 hover:bg-red-500 hover:text-white text-sm"
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
                      <hr className="hr-basket"/>
                    </p>
                  ))
                ) : (
                  <p>You don't have any purchases</p>
                )}
                <a
                  {...(this.state.totalPrice > 0
                    ? { href: "/form" }
                    : { href: "/app" })}
                >
                  <button className="mt-4 text-white bg-green-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center mr-2 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-500">
                    <svg
                      aria-hidden="true"
                      class="mr-2 -ml-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                    </svg>
                    Order for {this.state.totalPrice}€
                  </button>
                </a>
              </div>
            </div>{" "}
          </Modal>
        </div>

        <div className="flex-product">
          <div className="flex-container-product">
            {csv.map((data, key) => {
              return (
                <div className="item-map" key={key}>
                  <div className="map-product">
                    <img
                      className="img-product"
                      alt={data.nom}
                      src={data.url}
                      title={data.prix + "€"}
                    ></img>
                  </div>
                    <button
                      className="button-add inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
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
    );
  }
}

export default App;
