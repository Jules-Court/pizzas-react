import React, { Component } from "react";
import "../style/Livreur.css";
export default class AllDelivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      userData: "",
      id: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:8081/form")
      .then((res) => res.json())
      .then((resp) => {
        this.setState({ data: resp });
      });

    fetch("http://localhost:8081/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, "UserData");

        this.setState({ userData: data.data });
      });
  }

  handleSubmit(e, cmdId) {
    e.preventDefault();
    const {userData} = this.state;
    // console.log(cmdId, userData);
    fetch("http://localhost:8081/all-delivery", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        id:cmdId,
        userData
      }),
    })
      .then((res) => res.json())
      .then((data) => {

        this.setState({userData: data.data });
      });


      
  }

  render() {
    return (
      <div>
        <p>
          Mail : {this.state.userData.email}, Id : {this.state.userData.id}
        </p>

        <div className="flex">
          <div className="flex-container">
            {this.state.data.map((item, i) => (
              <div key={i} className="item-map">
                <div className="map"></div>

                <div className="item">
                  {this.state.data[i].firstname}
                  <br />
                  {this.state.data[i].lastname}

                  <br />
                  {this.state.data[i].phone}
                  <form onSubmit={(e) => this.handleSubmit(e,this.state.data[i].commandeid)}>
                    <input type="submit" value="Je prends!"/>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
