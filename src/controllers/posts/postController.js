const Post = require('../../db/models/Post');

class PostController {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  async getPosts() {
    console.log(this.req);
  }

  async createPost() {
    const post = await Post(this.req.body);
    post
      .save()
      .then((doc) => this.res.send(doc))
      .catch((err) => this.res.status(401).send(err));
  }
}

module.exports = PostController;
