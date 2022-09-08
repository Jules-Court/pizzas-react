import React, { Component } from "react";
import "../style/Livreur.css"
export default class Livreur extends Component {
  render() {
    return (
      <div className="livreur-container">
        <nav id="menu">
          <input type="checkbox" id="responsive-menu" onclick="updatemenu()" />
          <label></label>
          <ul>
          <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/livreur">Mes livraisons</a>
            </li>
            <li>
              <a href="/livreur">Livraisons dispo</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
