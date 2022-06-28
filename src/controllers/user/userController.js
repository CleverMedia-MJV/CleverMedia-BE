// const User = require('../../db/models/User');

class UserController {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  post() {
    console.log(this.req.body);
  }
}

module.exports = UserController;
