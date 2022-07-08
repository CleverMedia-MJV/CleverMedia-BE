const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username must be set'],
    trim: true,
    unique: [true, 'Username exists'],
  },
  fullname: {
    type: String,
    validate: {
      validator: (v) => /\w*\s\w*/.test(v),
      message: 'Input valid full name',
    },
    required: [true, 'Full name must be set'],
  },
  image: String,
  //   todo: to fix the birthday validator
  birthday: {
    type: Date,
    validate: {
      validator: (e) => (new Date() - e) / 365 > 10,
      message: 'Must be more than 10 years old',
    },
    required: [true, 'Age must be set'],
  },
  email: {
    type: String,
    validate: {
      // basic mail address validator
      validator: (e) => /\w+@\w+\.\w+/.test(e),
      message: 'Enter a valid email',
    },
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

// password hashing
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

// password validation
UserSchema.method.validate = async function (password) {
  // get this password first
  return bcrypt.compare(password, this.password);
};

UserSchema.index({ username: 1 });
module.exports = mongoose.model('User', UserSchema);
