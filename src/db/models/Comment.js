const mongoose = require('mongoose');

const { Schema } = mongoose;

const CommentSchema = new Schema({
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  content: {
    type: String,
  },
});
module.exports = mongoose.model('Comment', CommentSchema);
