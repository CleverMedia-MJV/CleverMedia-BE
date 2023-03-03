const Post = require('../../db/models/Post');

class PostController {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  async getPosts() {
    const posts = await Post.find({});
    if (posts) {
      this.res.send(posts);
    } else {
      this.res.status(400).send("couldn't get posts");
    }
  }

  async getPostById() {
    const post = await Post.find({ _id: this.req.params.id });
    if (post) {
      return this.res.send(post);
    }
    return this.res.status(400).send("couldn't get post");
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
