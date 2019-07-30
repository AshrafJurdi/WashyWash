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

function App() {
  return (
    <div className="App">
      <Orders_Updated />
      <Users />
      <Header />
      <NavBar />
      {/* <Orders_Updated /> */}
      {/* <Users /> */}

      <Products />
      <CMSLoginForm />
    </div>
  );
}

export default App;
