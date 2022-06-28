const { Router } = require('express');

const router = Router();

router.get('/', (req, res, next) => {
  res.end('Hi');
});

module.exports = router;
