#!/usr/bin/env node

// import the express app
const server = require('./app');
require('dotenv').config({ silent: true }); // load environmental variables from a hidden file named .env

// Sample data for "About Us" page
const aboutUsData = {
  aboutText: "Hello! I'm John Doe, a passionate web developer...",
  imageUrl: "https://example.com/path/to/your/image.jpg"  // Replace with the actual URL of your image
};

// Endpoint to serve "About Us" data
server.get('/api/about-us', (req, res) => {
  res.json(aboutUsData);
});

// which port to listen for HTTP(S) requests
const port = process.env.PORT || 3000;

// call a function to start listening to the port
const listener = server.listen(port, function () {
  console.log(`Server running on port: ${port}`);
});

// a function to stop listening to the port
const close = () => {
  listener.close();
};

// export the close function
module.exports = {
  close: close,
};
