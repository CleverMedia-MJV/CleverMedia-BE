const jwt = require('jsonwebtoken');

function Tokenizer(id) {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: '5d',
  });
}

module.exports = Tokenizer;
