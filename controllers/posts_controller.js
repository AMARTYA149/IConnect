const Post = require("../models/post");
const Comment = require("../models/comment");

module.exports.posts = function (req, res) {
  res.end("<h1>Post Controller!</h1>");
};

module.exports.create = async function (req, res) {
  try {
    let post = await Post.create({
      content: req.body.content,
      user: req.user._id,
    });
    let userName = req.user.name;
    if (req.xhr) {
      return res.status(200).json({
        data: {
          post: post,
          userName: userName,
        },
        message: "Post created!",
      });
    }

    req.flash("success", "Post published!");
    return res.redirect("back");
  } catch (error) {
    req.flash("error", error);
    return res.redirect("back");
  }
};

module.exports.destroy = async function (req, res) {
  try {
    let post = await Post.findById(req.params.id);
    //.id means converting the object id to string
    if (post.user == req.user.id) {
      post.remove();

      await Comment.deleteMany({ post: req.params.id });
      req.flash("success", "Post and associated comments deleted!");

      return res.redirect("back");
    } else {
      req.flash("error", "You can't delete this post!");
      return res.redirect("back");
    }
  } catch (error) {
    req.flash("error", err);
    return res.redirect("back");
  }
};
