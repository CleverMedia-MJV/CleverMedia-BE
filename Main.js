const express = require('express');
const helmet = require('helmet');

const app = express();

// middlewares
app.use(helmet());

module.exports = app;
