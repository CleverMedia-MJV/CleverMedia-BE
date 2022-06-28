const isProduction = require('./stage');

exports.constants = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: isProduction()
    ? process.env.MONGO_URI
    : 'mongodb://localhost/clevermedia',
};
