const { Router } = require('express');
const Protect = require('../../middlewares/auth');
const UserController = require('../../controllers/user/userController');
const CommentController = require('../../controllers/comment/comment');

const router = Router();

// GET user with id
router.post('/:post_id', Protect, (...args) =>
  new CommentController(...args).addComment()
);
router.get('/:post_id', Protect, (...args) =>
  new CommentController(...args).getCommentsByPostId()
);
router.put('/:id', Protect, (...args) =>
  new CommentController(...args).update()
);

module.exports = router;
