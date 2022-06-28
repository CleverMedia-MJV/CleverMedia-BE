const mongoose = require('mongoose');
const { MONGO_URI } = require('../../../config/constants').constants;

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI, {
      autoIndex: false,
    });
    console.log('DB connected');
  } catch (error) {
    console.trace('DB Error:\n', error);
  }
}

module.exports = connectDB;
