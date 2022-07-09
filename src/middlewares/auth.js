const jwt = require('jsonwebtoken');
const User = require('../db/models/User');

async function Protect(req, res, next) {
  let token = req.headers.authorization;

  if (token && token.startsWith('Bearer')) {
    token = req.headers.authorization.replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.jwtSecret);
    req.user = await User.findById(decoded.id);
    next();
  } else res.status(401).send('Unauthorized');
}

module.exports = Protect;
