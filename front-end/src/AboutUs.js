import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AboutUs = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from backend
    axios.get('/Users/ericzhu/3-simple-mern-stack-app-Erikccc/back-end')
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
      <img src={data.imageUrl} alt="About us" />
    </div>
  );
}

export default AboutUs;
