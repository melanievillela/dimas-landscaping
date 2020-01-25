import React, { Component } from 'react';
import Intro from './Intro';
import Service from './Service';
import Contact from './Contact';
import hero from '../Images/garden-mower.jpg'

class Home extends Component {
    state = {
        services : [			
            {name: "Lawn Mowing",
            icon: "mower.png",
            },
            {name: "Fertilization",
            icon: "grass.png",
            },
            {name: "Bush Shaping",
            icon: "bush.png",
            },
            {name: "Tree Trimming",
            icon: "trees.png",
            },
            {name: "Fence Building",
            icon: "fence.png",
            },
            {name: "Brick & Stone Walkways",
            icon: "brick.png",
            },       
            {name: "Power Washing",
            icon: "hose.png",
            },     
            {name: "Sprinkler Installation",
            icon: "sprinkler.png",
            },	
            {name: "Pesticide Treatment",
            icon: "pesticide.png",
            },
            {name: "Design Services",
            icon: "sketch.png",
            },					
        ]
    }
    
	render() {
        const services = this.state.services;

        return (
            <>
                <Intro></Intro>
                <section className="services flex" id="services">
                    <div><h2>SERVICES</h2></div>
                    <div className="flex">                        
                        {services.map((service, index) =>
                            <Service
                                key={index}
                                name={service.name}
                                icon={service.icon}
                            >
                            </Service>		
                        )}
                    </div>					
                </section>	
                <section className="flex center" id="about">
                    <h2>ABOUT</h2>
                    <div className="flex">
                        <div>
                            <img src={hero} alt="hero" />
                        </div>
                        <div>
                            <p>Our mission is to create and maintain beautiful lawns for your home or business while keeping prices affordable.</p>
                            <p>We are a family owned business and are true horticulturists with over 30 years experience in creating and maintaining beautiful environments.</p> 
                            <p>Give your lawn the attention it deserves and schedule a consultation with us today.</p>
                        </div>
                    </div>
                </section>
                <section className="" id="contact">
                    <Contact></Contact>
                </section>
            </>
        );
    }
}

export default Home;