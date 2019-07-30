import React from "react";
// import "./App.css";
// import Orders from "./Components/Orders/Orders.test";
// import CMSLoginForm from "./Components/Login/cmslogin";
import Header from "./Components/Header/header";
import NavBar from "./Components/NavBar/navbar";
import logo from "./logo.svg";
import "./App.css";


import Orders_Updated from "./Components/Orders_Updated/Orders_Updated";
import Users from "./Components/Users/Users";
import Products from "./Components/Products/Products";
// import User_Popup from "../../front/src/components/User_Popup/User_Popup.test";
import "./App.css";
import Orders from "./Components/Orders/Orders.test";
import CMSLoginForm from "./Components/Login/cmslogin";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Orders_Updated />
      <Users />
=======
      <Header />
      <NavBar />

      <Orders />

      {/* <Orders_Updated /> */}
      {/* <Users /> */}
>>>>>>> ba4fab8784d9863c92276a4832fc1552931ce49d
      <Products />
      <CMSLoginForm />
    </div>
  );
}

export default App;
