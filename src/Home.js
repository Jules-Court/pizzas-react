import App from "./component/App";
import AppHome from "./component/AppHome";
import Form from "./component/Formul";


import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyDelivery from "./component/MyDelivery";
import HeaderLivreur  from "./component/HeaderLivreur";
import AllDelivery  from "./component/AllDelivery";

function Home() {
  return (
    <div className="home">
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<><AppHome /></>}></Route>
            <Route exact path="/app" element={<><App /></>}></Route>
            <Route exact path="/menu" element={<><App /></>}></Route>
            <Route exact path="/entree" element={<><App /></>}></Route>
            <Route exact path="/pizza" element={<><App /></>}></Route>
            <Route exact path="/dessert" element={<><App /></>}></Route>
            <Route exact path="/boisson" element={<><App /></>}></Route>
            <Route exact path="/form" element={<><Form /></>}></Route>
            <Route exact path="/my-delivery" element={<><HeaderLivreur/><MyDelivery /></>}></Route>
            <Route exact path="/all-delivery" element={<><HeaderLivreur/><AllDelivery /></>}></Route>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default Home;
