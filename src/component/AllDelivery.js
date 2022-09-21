import React, { Component } from "react";
import "../style/Livreur.css";
export default class MyDelivery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      Address: "",
      Contenu: "",
    };
  }

  render() {
    // RECUPERER LES COMMANDES AVEC l'ID QUI EST NULL
    return (
      <div>
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
