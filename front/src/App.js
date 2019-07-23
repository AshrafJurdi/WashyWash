import React from 'react';
import './App.css';
import Footer from './components/Footer/footer';
import About_Us from './components/About_Us/About_Us.test';
import './components/About_Us/About_Us.css';
import Contact_Info from './components/Contact_Info/Contact_Info.test';
import './components/Contact_Info/Contact_Info.css'

function App() {
	return (
		<div className="App">
			<About_Us />
			{/* <Contact_Info /> */}

		</div>
	);
}

export default App;
