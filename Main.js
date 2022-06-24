const express = require('express');
const helmet = require('helmet');
const respond = require('./src/controllers/respond');

const app = express();

// middlewares
app.use(helmet());

// server home page
app.get('/', (req, res, next) => {
  respond(res, 'Welcome to the server home');
  next();
});

module.exports = app;
