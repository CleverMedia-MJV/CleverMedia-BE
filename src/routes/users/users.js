const { Router } = require('express');
const { default: mongoose } = require('mongoose');
const { getUserById } = require('../../controllers/users');
const User = require('../../models/user');

const { ObjectId } = mongoose.Types;

const router = Router();

router.get('/:id', getUserById);
router.put('/:id', async (req, res) => {
  try {
    const objectId = new ObjectId(req.params.id);
    const update = req.body;
    const filter = { _id: objectId };

    const user = await User.findOneAndUpdate(filter, update, {
      new: true,
    });
    if (user) {
      return res.status(201).json(user);
    }
    return res.status(400).json({ message: 'user not found/bad request' });
  } catch (error) {
    return res.status(400).json({ message: 'Something went wrong' });
  }
});

module.exports = router;
