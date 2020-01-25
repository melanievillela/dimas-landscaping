import React from 'react';

const Contact = () => (
    <>
        <div><h2>CONTACT</h2></div>

        <form action="https://formspree.io/xgeajpje" method="POST" className="flex">
            <label for="first_name">First Name</label>
            <input type="text" id="first_name" name="first_name"></input>

            <label for="last_name">Last Name</label>
            <input type="text" id="last_name" name="last_name"></input>
        
            <label for="email">Email</label>
            <input type="email" id="email" name="email"></input>

            <input type="submit" value="Submit"></input>
        </form>
    </>
)

export default Contact;