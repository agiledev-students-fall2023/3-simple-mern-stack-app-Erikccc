import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AboutUs = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:7002/about-us')  // Replace YOUR_BACKEND_PORT with the port your backend is running on
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    }, []);

    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <h2>About Us</h2>
            <p>{data.aboutText}</p>
            <img src={data.imageUrl} alt="About Us" />
        </div>
    );
}

export default AboutUs;
