const { Router } = require('express');

const v1Router = Router({ strict: true });

const authRouter = require('../routes/auth/auth');

const userRouter = require('../routes/users/users');

// All user routes
v1Router.use('/users', userRouter);
v1Router.use('/auth', authRouter);

module.exports = v1Router;
