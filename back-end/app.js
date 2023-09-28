require('dotenv').config({ silent: true });
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(morgan('dev', { skip: (req, res) => process.env.NODE_ENV === 'test' }));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets like images from the public directory
app.use('/public', express.static('public'));

mongoose
  .connect(`${process.env.DB_CONNECTION_STRING}`)
  .then(() => console.log(`Connected to MongoDB`))
  .catch(err => console.error(`Failed to connect to MongoDB: ${err}`));

const { Message } = require('./models/Message');
const { User } = require('./models/User');

// Sample data for "About Us" page
// Sample data for "About Us" page
const aboutUsData = {
  aboutText: "My name is Eric Zhu and I am a senior in NYU. My major is computer science joint econ and I have been struggled four years studying these two hard major.",
  imageUrl: "/public/WechatIMG232.jpg"
};

// Endpoint to serve "About Us" data
app.get('/about-us', async (req, res) => {
  try {
    res.json({
      aboutUs: aboutUsData,
      status: 'all good',
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      error: err,
      status: 'failed to retrieve about us data',
    });
  }
});


app.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find({});
    res.json({
      messages: messages,
      status: 'all good',
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      error: err,
      status: 'failed to retrieve messages from the database',
    });
  }
});

app.get('/messages/:messageId', async (req, res) => {
  try {
    const messages = await Message.find({ _id: req.params.messageId });
    res.json({
      messages: messages,
      status: 'all good',
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      error: err,
      status: 'failed to retrieve messages from the database',
    });
  }
});

app.post('/messages/save', async (req, res) => {
  try {
    const message = await Message.create({
      name: req.body.name,
      message: req.body.message,
    });
    return res.json({
      message: message,
      status: 'all good',
    });
  } catch (err) {
    console.error(err);
    return res.status(400).json({
      error: err,
      status: 'failed to save the message to the database',
    });
  }
});

module.exports = app;
