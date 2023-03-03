const { Router } = require('express');
const Protect = require('../../middlewares/auth');
// const UserController = require('../../controllers/user/userController');
const PostController = require('../../controllers/posts/postController');

const router = Router();

// GET user with id
router.get('/', Protect, (...args) => new PostController(...args).getPosts());
router.get('/:id', Protect, (...args) =>
  new PostController(...args).getPostById()
);
router.post('/', Protect, (...args) =>
  new PostController(...args).createPost()
);
router.put('/:id', Protect, (...args) => new PostController(...args).update());

module.exports = router;
