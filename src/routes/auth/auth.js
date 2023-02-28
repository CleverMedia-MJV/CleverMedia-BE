const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/user');

const router = Router();

router.post('/register', async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    if (!(email && password && first_name && last_name)) {
      res.status(400).send('All input is required');
    }
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(409).send('User Already Exist. Please Login');
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: '2h',
      }
    );
    user.token = token;

    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'email in use' });
  }
});
router.post('/login', async (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send('All input is required');
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email: email.toLowerCase() });

    if (user && bcrypt.compare(password, user.password)) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: '2h',
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    }
    res.status(400).send('Invalid Credentials');
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
});
module.exports = router;
