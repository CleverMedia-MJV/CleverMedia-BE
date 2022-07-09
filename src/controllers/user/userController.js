const User = require('../../db/models/User');
const CustomError = require('../../errors/customErr');

class UserController {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  async getDetails() {
    const { user } = this.req;

    this.res.send(user);
  }
}

module.exports = UserController;
