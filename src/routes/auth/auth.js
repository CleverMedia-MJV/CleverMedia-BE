const { Router } = require('express');
const { registerFunc, LoginFunc } = require('../../controllers/auth');

const router = Router();

router.post('/register', registerFunc);
router.post('/login', LoginFunc);
module.exports = router;
