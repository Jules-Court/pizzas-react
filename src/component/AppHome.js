import React from "react";
import "../style/Home.css";

function AppHome() {
    return (
      <div>
        <h1>Bienvenue chez PizzaS</h1>
        <img className="img-home" alt="menu" src="../img/menu.webp"></img>

        <div className="pos-button">
          <a href="/app" className="btn">
            Client
          </a>
          <a href="/livreur" className="btn">
            Livreur
          </a>
        </div>
      </div>
    );
  
}

export default AppHome;
