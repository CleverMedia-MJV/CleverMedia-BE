const { Router } = require('express');
const UserController = require('../../controllers/user/userController');

const router = Router();

// POST one user
router.post('/', (...args) => new UserController(...args).post());

// POST login one user
router.post('/login', (...args) => new UserController(...args).login());

// GET user with id
router.get('/:id', (req, res, next) => {
  res.end('Hello');
});

module.exports = router;
