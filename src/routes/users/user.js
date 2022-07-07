const { Router } = require('express');
const UserController = require('../../controllers/user/userController');

const router = Router();

// GET user with id
router.get('/:id', (req, res, next) => {
  res.end('Hi');
});

// POST one user
router.post('/', (...args) => new UserController(...args).post());

module.exports = router;
