import React, { Component } from "react";
import "../style/Livreur.css";
export default class Livreur extends Component {
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
                <a href="/livreur">Mes livraisons</a>
              </li>
              <li>
                <a href="/livreur">Livraisons dispo</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex">
          <div class="flex-container">
            <div class="item">item 1</div>
            <div class="item">item 2</div>
            <div class="item">item 3</div>
            <div class="item">item 4</div>
          </div>
        </div>
      </div>
    );
  }
}
