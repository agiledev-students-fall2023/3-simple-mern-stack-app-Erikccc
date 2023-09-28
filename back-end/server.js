#!/usr/bin/env node

// import the express app
const server = require('./app')
require('dotenv').config({ silent: true }) // load environmental variables from a hidden file named .env

// which port to listen for HTTP(S) requests
const port = process.env.PORT || 3000

// call a function to start listening to the port
const listener = server.listen(port, function () {
  console.log(`Server running on port: ${port}`)
})

// a function to stop listening to the port
const close = () => {
  listener.close()
}
const express = require('express');
const app = express();

// Sample data for "About Us" page
const aboutUsData = {
  aboutText: "My name is Eric Zhu and I am a senior in NYU. My major is computer science joint econ and I have been struggled four years studying these two hard major.",
  imageUrl: "path/to/WechatIMG232.jpg" // Make sure this path points to where the image can be publicly accessed
};

// Endpoint to serve "About Us" data
app.get('/api/about-us', (req, res) => {
  res.json(aboutUsData);
});
// export the close function
module.exports = {
  close: close,
}
