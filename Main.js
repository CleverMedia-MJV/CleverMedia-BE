const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const xssClean = require('xss-clean');
const ErrorHandler = require('./src/middlewares/errorHandler');
const v1 = require('./src/versions/v1');
const swaggerUi = require('swagger-ui-express'),
  swaggerDocument = require('./swagger.json');
const app = express();

// middlewares
app.use(cors());
app.use(helmet());
app.use(xssClean());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// server home page
app.get('/', (_, res, next) => {
  res.status(200).sendFile('./public/index.html');
  next();
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// version system
app.use('/api/', v1);

// Not found
app.use('*', (_, res, next) => {
  res.status(400).send('Not found');
});

// app.use(ErrorHandler());

module.exports = app;
