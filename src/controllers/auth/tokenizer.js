const jwt = require('jsonwebtoken');

function Tokenizer(id) {
  return jwt.sign({ id }, process.env.jwtSecret, {
    expiresIn: '5d',
  });
}

module.exports = Tokenizer;
