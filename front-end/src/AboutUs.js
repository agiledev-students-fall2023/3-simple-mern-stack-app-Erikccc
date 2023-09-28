import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AboutUs = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from backend
    axios.get('/api/about-us')
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
      <img src={data.imageUrl} alt="About Eric Zhu" style={{ width: '150px' }} />
    </div>
  );
}

export default AboutUs;
