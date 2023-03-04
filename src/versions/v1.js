const { Router } = require('express');

const v1Router = Router({ strict: true });

const authRouter = require('../routes/auth/auth');
const userRouter = require('../routes/users/user');
const postRouter = require('../routes/posts/posts');
const commentRouter = require('../routes/comments/comments');

// All user routes
v1Router.use('/users', userRouter);
v1Router.use('/auth', authRouter);
v1Router.use('/posts', postRouter);
v1Router.use('/comments', commentRouter);

module.exports = v1Router;
