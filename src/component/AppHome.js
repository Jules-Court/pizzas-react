import React from "react";
import "../style/Home.css";

function AppHome() {
    return (
      <div>
      <div className="home-delivery">
        <h1>Bienvenue chez PizzaS</h1>
        <img className="img-home" alt="menu" src="../img/menu.webp"></img>

        <div className="pos-button">
          <a href="/pizza" className="btn">
            Client
          </a>
          <a href="/my-delivery" className="btn">
            Livreur
          </a>
        </div>
      </div>
      </div>
    );
  
}

export default AppHome;
