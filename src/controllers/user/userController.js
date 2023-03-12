const User = require('../../db/models/User');
// const CustomError = require('../../errors/customErr');

class UserController {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  async getDetails() {
    const users = await User.find({});
    if (users) {
      this.res.send(users);
    } else {
      this.res.status(404).send('no user in db');
    }
  }

  async getDetailsById() {
    if (this.req.params.id) {
      const userFound = await User.findOne({ _id: this.req.params.id });

      this.res.send(userFound);
    } else {
      this.res.status(401).send('no id present');
    }
  }
}

module.exports = UserController;
