const { Router } = require('express');
const AuthController = require('../../controllers/auth/auth');

const router = Router();

// POST one user
router.post('/', (req, res, next) => new AuthController(req, res, next).post());

// POST login one user
router.post('/login', (...args) => new AuthController(...args).login());

module.exports = router;
