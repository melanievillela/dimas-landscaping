import React, { Component } from 'react';

class Service extends Component {
    
	render() {
    
        return (
            <div className="service">
                <img src={require(`../Images/${this.props.icon}`)} alt="icon" className="icon"/>
                <h3>{this.props.name}</h3>
            </div>
        );
    }
}

export default Service;