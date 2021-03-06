const Post = require("../models/post");

const User = require("../models/user");

module.exports.home = async function (req, res) {
  // console.log(req.cookies);
  // res.cookie("user_id", 34);

  // Post.find({}, function (err, posts) {
  //   return res.render("home", {
  //     title: "Home",
  //     posts: posts,
  //   });
  // });
  try {
    //populate the user of each post
    //CHANGE :: populate the likes of each post and comment
    let posts = await Post.find({})
      .sort("-createdAt")
      .populate("user")
      .populate({
        path: "comments",
        populate: {
          path: "user",
        },
        populate: {
          path: "likes",
        },
      })
      .populate("likes");

    let users = await User.find({});
    return res.render("home", {
      title: "iConnect | Home",
      posts: posts,
      all_users: users,
    });
  } catch (error) {
    console.log("Error", error);
    return;
  }
};

//module.exports.actionName = function(req, res) {}
