const { Router } = require('express');
// const { default: mongoose } = require('mongoose');
const { getUserById, updateUserById } = require('../../controllers/users');
// const User = require('../../models/user');

// const { ObjectId } = mongoose.Types;

const router = Router();

router.get('/:id', getUserById);
router.put('/:id', updateUserById);

module.exports = router;
