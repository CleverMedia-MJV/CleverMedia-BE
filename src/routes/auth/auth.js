const { Router } = require('express');
const AuthController = require('../../controllers/auth/auth');

const router = Router();

// POST one user
router.post('/', (...args) => new AuthController(...args).post());

// POST login one user
router.post('/login', (...args) => new AuthController(...args).login());

module.exports = router;
