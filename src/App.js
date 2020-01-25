import React, { Component } from 'react';
//import { Route,	BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
//import Sign_Up from './Components/Sign_Up';
//import Sign_In from './Components/Sign_In';

class App extends Component {

	render() {
		let prevScrollPos = window.pageYOffset;
		window.onscroll = function() {
		let currentScrollPos = window.pageYOffset;
		if (prevScrollPos > currentScrollPos) {
			document.querySelector(".navbar").style.top = "0";
		} else {
			document.querySelector(".navbar").style.top = "-75px";
		}
		prevScrollPos = currentScrollPos;
		}

		console.log("Icons made by Authors: Good Ware, Freepik, Itim2101, Smashicons from Website: https://www.flaticon.com")

		return (
				<div className="outer-container" id="home">
					<header>
						<Navbar></Navbar>
						<Home></Home>
					</header>						
				</div>
		);
	}
}

export default App;

/*
<Router>
	<Switch>
		<Route exact path="/" component={Home}></Route>
		<Route exact path="/Sign_In" component={Sign_In}></Route>
		<Route exact path="/Sign_Up" component={Sign_Up}></Route>
	</Switch>	
</Router>
*/