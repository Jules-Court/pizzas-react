import React, { Component } from "react";
import "../style/Livreur.css";
export default class MyDelivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount(){
    fetch("http://localhost:8081/form")
      .then((res) => res.json())
      .then((resp) => {
        this.setState({ data: resp });
      });
  };

  render() {
    return (
      <div>
        <div className="flex">
          <div className="flex-container">
            {this.state.data.map((item, i) => (
              <div key={i} className="item-map">
                <div className="map"></div>

                <div className="item">
                  <br/>
                  {this.state.data[i].firstname} {this.state.data[i].lastname}
                  <br />
                  <br />
                  {this.state.data[i].phone}
                  <button className="item-button"> Je prends</button>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
