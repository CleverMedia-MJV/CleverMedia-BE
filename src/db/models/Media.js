const mongoose = require('mongoose');

const { Schema } = mongoose;

const MediaSchema = new Schema({
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  url: {
    type: String,
  },
});
module.exports = mongoose.model('Media', MediaSchema);
