import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AboutUs = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from backend
    axios.get('/about-us')  // Assuming your backend server is running on the same domain as your frontend
      .then(response => {
        setData(response.data.aboutUs);
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
      <img src={data.imageUrl} alt="Eric Zhu" />
    </div>
  );
}

export default AboutUs;
