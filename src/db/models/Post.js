const mongoose = require('mongoose');

const { Schema } = mongoose;

const PostSchema = new Schema({
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  content: {
    type: String,
    required: [true, 'Content is empty!'],
  },
  version: { type: Number, required: [true, 'User Schema version not set'] },
  comments: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Comment',
    },
  ],
  media: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Media',
    },
  ],
  views: {
    type: Number,
    default: 0,
  },
  ratings: {
    likes: {
      type: Number,
      default: 0,
    },
    shares: {
      type: Number,
      default: 0,
    },
  },
});
module.exports = mongoose.model('Post', PostSchema);
