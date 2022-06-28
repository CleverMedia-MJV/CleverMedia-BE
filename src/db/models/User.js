const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username must be set'],
    unique: true,
  },
  fullname: {
    type: String,
    validate: {
      validtor: (v) => /\w*\s\w*/.test(v),
      message: 'Input valid full name',
    },
    required: [true, 'Full name must be set'],
  },
  image: String,
  birthday: {
    type: Date,
    validate: {
      validator: (v) => (new Date() - v) / 365 > 10,
      message: 'Must be more than 10 years old',
    },
    required: [true, 'Age must be set'],
  },
  password: { type: String, required: [true, 'Password must be set'] },
  bio: { type: String, maxLength: 120 },
  preferences: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
    },
  ],
  favourites: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Post',
    },
  ],
  posts: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Post',
    },
  ],
  location: { type: String },
  version: { type: Number, required: [true, 'User Schema version not set'] },
  followers: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  ],
});

module.exports = mongoose.Model('User', UserSchema);
