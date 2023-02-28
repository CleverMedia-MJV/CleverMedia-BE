// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');

const User = require('../models/user');

const { ObjectId } = mongoose.Types;

async function getUserById(req, res) {
  try {
    const objectId = new ObjectId(req.params.id);
    const user = await User.findOne({ _id: objectId });
    if (user) {
      return res.status(200).json(user);
    }
    return res.status(400).json({ message: "user doesn't exist" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Something went wrong' });
  }
}
module.exports = { getUserById };
