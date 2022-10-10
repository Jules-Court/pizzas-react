import App from "./component/App";
import AppHome from "./component/AppHome";
import Form from "./component/Formul";


import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyDelivery from "./component/MyDelivery";
import HeaderLivreur  from "./component/HeaderLivreur";
import AllDelivery  from "./component/AllDelivery";
import SignUp  from "./component/Signup";
import Login  from "./component/Signin";
import Connection  from "./component/Connection";

function Home() {
  var isLoggedIn;
  if(window.localStorage.getItem('token')===null){
    isLoggedIn=false;
  }else{
    isLoggedIn=true;
  }
  return (
    <div className="home">
      {isLoggedIn ? (
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<><AppHome /></>}></Route>
            <Route exact path="/connect" element={<><HeaderLivreur/></>}></Route>
            <Route exact path="/app" element={<><App /></>}></Route>
            <Route exact path="/sign-up" element={<><SignUp /></>}></Route>
            <Route exact path="/login" element={<><Login /></>}></Route>
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
      ):(
      <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<><AppHome /></>}></Route>
          <Route exact path="/connect" element={<><Connection /></>}></Route>
          <Route exact path="/app" element={<><App /></>}></Route>
          <Route exact path="/sign-up" element={<><SignUp /></>}></Route>
          <Route exact path="/login" element={<><Login /></>}></Route>
          <Route exact path="/menu" element={<><App /></>}></Route>
          <Route exact path="/entree" element={<><App /></>}></Route>
          <Route exact path="/pizza" element={<><App /></>}></Route>
          <Route exact path="/dessert" element={<><App /></>}></Route>
          <Route exact path="/boisson" element={<><App /></>}></Route>
          <Route exact path="/form" element={<><Form /></>}></Route>

      </Routes>
    </BrowserRouter>
    )}
      
    </div>
  );
}

export default Home;
