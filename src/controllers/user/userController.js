const User = require('../../db/models/User');

class UserController {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  post() {
    const user = new User(this.req.body);
    const user2 = new User(this.req.body);
    user
      .save()
      .then((doc) => this.res.send(doc))
      .catch((err) => this.res.status(401).send(err));
    user2
      .save()
      .then((doc) => this.res.send(doc))
      .catch((err) => this.res.status(401).send(err));
  }
}

module.exports = UserController;
