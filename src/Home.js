import App from "./App";
import AppHome from "./AppHome";
import Form from "./Form";

import React from "react";
import Livreur from "./Livreur"
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
            <Route exact path="/livreur" element={<><Livreur /></>}></Route>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default Home;
