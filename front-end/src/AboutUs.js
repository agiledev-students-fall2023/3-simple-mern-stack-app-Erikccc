import React from 'react';
import profilePic from './WechatIMG232.jpg'; // Adjust the path if needed

const AboutUs = () => {
    return (
        <div>
            <h2>About Us</h2>
            <p>My name is Eric Zhu and I am a senior in NYU. My major is computer science joint econ and I have been struggled four years studying these two hard major.</p>
            <img src={profilePic} alt="Eric Zhu" style={{ width: '150px', height: '150px' }} />
        </div>
    );
}

export default AboutUs;

