const Comment = require('../../db/models/Comment');
const Post = require('../../db/models/Post');

class CommentController {
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  async addComment() {
    try {
      const post = await Post.findById(this.req.params.post_id);
      if (!post) {
        return this.res.status(404).json({ error: 'Post not found' });
      }
      const comment = new Comment({
        content: this.req.body.content,
        post: post._id,
        owner: this.req.body.userId,
      });
      await comment.save();
      post.comments.push(comment._id);

      await post.save();

      return this.res.send(comment);
    } catch (error) {
      return this.res.status(500).json({ error: 'Server error' });
    }
  }

  async getCommentsByPostId() {
    const comments = await Comment.find({ post: this.req.params.post_id });

    if (!comments) {
      return this.res.status(404).json({ error: 'Comments not found' });
    }
    return this.res.send(comments);
  }

  async update() {
    const comment = await Comment.findOne({ _id: this.req.params.id });
    if (!comment) {
      return this.res.status(404).json({ error: 'Comment not found' });
    }
    if (this.req.body.userId == comment.owner) {
      comment.content = this.req.body.content;
      await comment.save();
      return this.res.send(comment);
    }
    return this.res.status(401).json({ message: 'unauthorized' });
  }
}
module.exports = CommentController;
