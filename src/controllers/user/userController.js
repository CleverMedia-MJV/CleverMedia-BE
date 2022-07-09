const User = require('../../db/models/User');
const CustomError = require('../../errors/customErr');

class UserController {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  post() {
    const user = new User(this.req.body);
    user
      .save()
      .then((doc) => this.res.send(doc))
      .catch((err) => this.res.status(401).send(err));
  }

  async login() {
    const details = this.req.body;

    const user = await User.findOne({ username: details.username });

    if (!user) throw new CustomError(`User ${details.username} not found`);

    if (await user.checkPassword(details.password)) {
      this.res.send('Logged in');
    } else {
      this.res.status(401).send('Unauthorized');
    }
  }
}

module.exports = UserController;
