import React, { Component } from "react";
import Navbar from "../src/components/Navbar/Nav";
import User_Popup from "./components/User_Popup/User_Popup.test";
import "./App.css";
import Footer from "./components/Footer/footer";
import About_Us from "./components/About_Us/About_Us.test";
import "./components/About_Us/About_Us.css";
import ServiceCard from "./components/Service-Card/service-card";
import LoginForm from "./components/LoginSignup/login";
import SignupForm from "./components/LoginSignup/signup";
import Form from "./components/Contact_Form/Contact_Form";
import CardDetails from "./components/CardDetails/CardDetails";
import EditForm from "./components/Edit_Profile/edit_profile";
import Test from "./components/test";

function App() {
  return (
    <div className="App">
      {/* <EditForm /> */}
      <ServiceCard />
    </div>
  );
}

export default App;
