import React from "react";
import "./App.css";
import Header from "./Components/Header/header";
import NavBar from "./Components/NavBar/navbar";
import MaterialTableDemo from "./Components/Customers/customers_update.js"
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
      <MaterialTableDemo />
      {/* <Orders_Updated /> */}
      {/* <Users /> */}
      {/* <Products />
      <CMSLoginForm /> */}
    </div>
  );
}

export default App;
