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

  async update() {
    try {
      const { content, views, ratings, media } = this.req.body;
      const postId = this.req.params.id;

      const post = await Post.findById(postId);
      if (!post) throw new Error('Post not found');

      // Update the post fields
      post.content = content || post.content; // Use existing value if not provided in request
      post.views = views || post.views; // Use existing value if not provided in request
      post.ratings = ratings || post.ratings; // Use existing value if not provided in request
      post.version = 1;
      post.media = media || post.media;

      const updatedPost = await post.save();

      this.res.status(200).json(updatedPost);
    } catch (error) {
      this.next(error);
    }
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
