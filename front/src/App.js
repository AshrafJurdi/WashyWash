<<<<<<< HEAD
import React, { Component } from "react";
import Navbar from '../src/components/Navbar/Nav'
import Footer from './components/Footer/footer';
import About_Us from './components/About_Us/About_Us.test'
import User_Popup from './components/User_Popup/User_Popup.test'

function App() {
	return (
		<div className="App">
			<Navbar/>
			<User_Popup/>
			{/* <About_Us/> */}
			{/* <Footer /> */}
=======
import React from "react";
import "./App.css";
import Footer from "./components/Footer/footer";
import About_Us from "./components/About_Us/About_Us.test";
import "./components/About_Us/About_Us.css";
import ServiceCard from "./components/Service-Card/service-card";
import LoginSignup from "./components/LoginSignup/login-signup";
import Form from "./components/Contact_Form/Contact_Form";
import CardDetails from "./components/CardDetails/CardDetails";

function App() {
  return (
    <div className="App">
      {/* <Router>
				<Route  exact path="/" component = {Home}></Route>
				
			</Router> */}
>>>>>>> 32e55f682f56764fbd1ab3fad01d63fb04e85225

      <CardDetails />
    </div>
  );
}

export default App;
