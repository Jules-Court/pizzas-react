import React, { Component } from "react";
import "../style/Livreur.css";
export default class HeaderLivreur extends Component {
  render() {
    return (
      <div>
        <div className="livreur-container">
          <nav id="menu">
            <input
              type="checkbox"
              id="responsive-menu"
              onclick="updatemenu()"
            />
            <label></label>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/my-delivery">Mes livraisons</a>
              </li>
              <li>
                <a href="/all-delivery">Livraisons dispo</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
