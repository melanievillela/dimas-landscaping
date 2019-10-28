import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';

class App extends Component {

	state = {
		services : ["Lawn Mowing", "Weed Control", "Bush Trimming", "Tree Trimming", "Stump Removal", "Fertilization", "Gravel Walkways",
		"Landscape Design", "Fencing Installation", "Drainage Installation", "Sprinkler Installation", "Power Washing"			
		]
	}

	render() {

		const services = this.state.services;

		return (
			<div className="outer-container">
				<Navbar></Navbar>
				<div className="hero-container flex center">
					<div className="hero-image">					
					</div>
					<div>
						<p>Our mission is to create and maintain beautiful lawns for your home or business while keeping prices affordable.</p>
						<p>We are a family owned business and are true horticulturists with over 30 years experience in creating and maintaining beautiful environments.</p> 
						<p>Give your lawn the attention it deserves and schedule a consultation with us today.</p>
					</div>
				</div>	
				<div className="services">
					<h2>Services</h2>
					<ul className="flex">
						{services.map((service, index) =>
						<li key={index}>{service}</li>
						)}
					</ul>
				</div>		
			</div>
		);
	}
}

export default App;