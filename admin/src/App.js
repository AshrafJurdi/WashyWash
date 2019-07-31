import React from "react";
import "./App.css";
import Header from "./Components/Header/header";
import NavBar from "./Components/NavBar/navbar";
import Orders from "./Components/Orders/Orders.test";
import Orders_Updated from "./Components/Orders_Updated/Orders_Updated";
import Users from "./Components/Users/Users";
import Products from "./Components/Products/Products";
// import User_Popup from "../../front/src/components/User_Popup/User_Popup.test";
import CMSLoginForm from "./Components/Login/cmslogin";
import ChooseProducts from "./Components/Choose Products/chooseProducts";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <ChooseProducts />
    </div>
  );
}

export default App;
