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

		</div>
	);
}

export default App;
