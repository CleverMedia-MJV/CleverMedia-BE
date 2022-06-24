const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const xssClean = require('xss-clean');

const app = express();

// middlewares
app.use(cors());
app.use(helmet());
app.use(xssClean());
app.use(express.static(path.join(__dirname, 'public')));
// server home page
app.get('/', (_, res, next) => {
  res.status(200).sendFile('./public/index.html');
  next();
});

module.exports = app;
