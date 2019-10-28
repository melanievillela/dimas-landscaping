import React, { Component } from 'react';

class Navbar extends Component {
    
	render() {
    
        return (
            <div className="navbar flex center">
                <h1>Dimas Landscaping</h1>
                <ul>
                    <li>123-456-7890</li>
                    <li>Services</li>
                    <li>Schedule</li>
                    <li>Pay</li>
                </ul>
            </div>
        );
    }
}

export default Navbar;