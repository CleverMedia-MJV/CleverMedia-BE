const { Router } = require('express');

const v1Router = Router({ strict: true });

const authRouter = require('../routes/auth/auth');
const userRouter = require('../routes/users/user');

// All user routes
v1Router.use('/user', userRouter);

module.exports = v1Router;
