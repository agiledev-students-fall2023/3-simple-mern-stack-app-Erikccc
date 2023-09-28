import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> | {/* This is a link to the home page or main page */}
                <Link to="/about-us">About Us</Link> {/* This link will reload the "About Us" page */}
            </nav>
            
            <h2>About Us</h2>
            <p>Your content here...</p>
            {/* You can add more content, images, etc. */}
        </div>
    );
}

export default AboutUs;
