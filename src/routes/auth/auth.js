const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const { registerFunc, LoginFunc } = require('../../controllers/auth');

const router = Router();

router.post('/register', registerFunc);
router.post('/login', LoginFunc);
module.exports = router;
