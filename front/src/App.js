import React, { Component } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Nav";
import Footer from "./components/Footer/footer";
import About_Us from "./components/About_Us/About_Us.test";
import "./components/About_Us/About_Us.css";
import ServiceCard from "./components/Service-Card/service-card";
import LoginForm from "./components/LoginSignup/login";
import SignupForm from "./components/LoginSignup/signup";
import Form from "./components/Contact_Form/Contact_Form";
import CardDetails from "./components/CardDetails/CardDetails";
<<<<<<< HEAD
import Contact_Info  from './components/Contact_Info/Contact_Info.test'
=======
import User_Popup from "./components/User_Popup/User_Popup.test";
import Contact_Info from "./components/Contact_Info/Contact_Info.test";
import Contact_Form from "./components/Contact_Form/Contact_Form";
>>>>>>> 339e1da854c2f2520c7d810a0213dcaa91820ada

function App() {
  return (
    <div className="App">
		<CardDetails/>
		{/* <User_Popup /> */}
      {/* <Router>
				<Route  exact path="/" component = {Home}></Route>
				
			</Router> */}
			
			
    </div>
  );
}

export default App;
