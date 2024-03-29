const { Router } = require('express');
const Protect = require('../../middlewares/auth');
const UserController = require('../../controllers/user/userController');

const router = Router();

// GET user with id
router.get('/', Protect, (...args) => new UserController(...args).getDetails());
router.get('/:id', Protect, (...args) =>
  new UserController(...args).getDetailsById()
);

module.exports = router;
