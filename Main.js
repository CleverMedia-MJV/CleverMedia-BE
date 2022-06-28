const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const xssClean = require('xss-clean');
const v1 = require('./src/versions/v1');

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

// version system
app.use('/api/', v1);

// Not found
app.use('*', (_, res, next) => {
  res.status(400).send('Not found');
});

module.exports = app;
