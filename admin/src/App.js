import React from "react";
import "./App.css";
import Header from "./Components/Header/header";
import NavBar from "./Components/NavBar/navbar";
import Orders_Updated from "./Components/Orders_Updated/Orders_Updated";
import Products from "./Components/Products/Products";
// import User_Popup from "../../front/src/components/User_Popup/User_Popup.test";
import CMSLoginForm from "./Components/Login/cmslogin";
import ChooseProducts from "./Components/Choose Products/chooseProducts";
import Users from "./Components/Users/Users";
import Orders from "./Components/Orders/Orders.test";
import Customers from "./Components/Customers/customers.js";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Overview />
      <NavBar /> */}
      <Customers />
      {/* <Orders_Updated /> */}
      {/* <Users /> */}
      {/* <Products />
      <CMSLoginForm /> */}
    </div>
  );
}

export default App;
