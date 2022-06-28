const User = require('../../db/models/User');

class UserController {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  post() {
    console.log(this.req.body);
    const user = new User(this.req.body);
    user
      .save()
      .then((doc) => this.res.send(doc))
      .catch((err) => this.res.status(401).send(err));
  }
}

module.exports = UserController;
