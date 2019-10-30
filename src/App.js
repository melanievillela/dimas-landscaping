import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Services from './Components/Services';

class App extends Component {

	state = {
		services : [
			{name: "Lawn Mowing",
			icon: "mower.png",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			},
			{name: "Weed Control",
			icon: "grass.png",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			},
			{name: "Bush Trimming",
			icon: "bush.png",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			},
			{name: "Tree Trimming",
			icon: "trees.png",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			},
			/*
			{name: "Stump Removal",
			icon: ""},
			{name: "Fertilization",
			icon: ""},
			{name: "Gravel Walkways",
			icon: ""},
			{name: "Landscape Design",
			icon: ""},
			{name: "Fencing Installation",
			icon: ""},
			{name: "Drainage Installation",
			icon: ""},
			{name: "Sprinkler Installation",
			icon: ""},
			{name: "Power Washing",
			icon: ""},
			*/		
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
				<div className="services flex">
					<h2>Services</h2>
					{services.map((service, index) =>
						<Services
							key={index}
							name={service.name}
							icon={service.icon}
							description={service.description}
						>
						</Services>							
					)}
				</div>		
			</div>
		);
	}
}

export default App;