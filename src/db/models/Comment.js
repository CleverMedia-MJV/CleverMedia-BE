const mongoose = require('mongoose');

const { Schema } = mongoose;

const CommentSchema = new Schema({
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'user id required'],
  },
  content: {
    type: String,
    required: [true, 'content is must be filled'],
  },
  post: {
    type: mongoose.Schema.ObjectId,
    ref: 'Post',
    required: [true, 'Post id required'],
  },
});
module.exports = mongoose.model('Comment', CommentSchema);
