const isProduction = require('./stage');

exports.constants = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: isProduction()
    ? process.env.MONGO_URI
    : 'mongodb://127.0.0.1:27017/clevermedia',
};
