import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class Navbar extends Component {

    adjustOffset = (e) => {	 
        e.preventDefault();
        const location = e.target.attributes.href.value;
        if (location == "home") {
            document.documentElement.scrollTop = 0;
        } else {
            document.querySelector(`#${location}`).scrollIntoView();
        }
    }

    render() {
        return (
            <div className="navbar flex center">
                <h1><a href='home' onClick={this.adjustOffset}>DIMAS LANDSCAPING</a></h1>
                <ul className="flex">
                    <li><a href='services' onClick={this.adjustOffset}>SERVICES</a></li>
                    <li><a href='about' onClick={this.adjustOffset}>ABOUT</a></li>
                    <li><a href='contact' onClick={this.adjustOffset}>CONTACT</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;

/*
<h1><Link to='/' location="#home" onClick={this.adjustOffset}>DIMAS LANDSCAPING</Link></h1>
<ul className="flex">
    <li><Link to='/' location="#services" onClick={this.adjustOffset}>SERVICES</Link></li>
    <li><Link to='/' location="#contact" onClick={this.adjustOffset}>CONTACT</Link></li>
    <li><Link to='/Sign_In'>SIGN IN</Link></li>
    <li><Link to='/Sign_Up'>SIGN UP</Link></li>
</ul>
*/