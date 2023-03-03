const { Router } = require('express');
const Protect = require('../../middlewares/auth');
const UserController = require('../../controllers/user/userController');
const PostController = require('../../controllers/posts/postController');

const router = Router();

// GET user with id
// router.get('/', Protect, (...args) => new UserController(...args).getDetails());
router.post('/', Protect, (...args) =>
  new PostController(...args).createPost()
);

module.exports = router;
