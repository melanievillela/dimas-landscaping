import React, { Component } from 'react';

class Services extends Component {
    
	render() {
    
        return (
            <div className="service">
                <img src={require(`../Images/${this.props.icon}`)} alt="icon" className="icon"/>
                <h3>{this.props.name}</h3>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default Services;

/*
<div>Icons made by <a href="https://www.flaticon.com/<?=_('authors/')?>good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/"         title="Flaticon">www.flaticon.com</a></div>
*/