const User = require("../models/user");

module.exports.profile = function (req, res) {
  return res.render("user_profile", {
    title: "User Title",
  });
};

//render sign up page
module.exports.signUp = function (req, res) {
  return res.render("user_sign_up", {
    title: "IConnect | Sign Up",
  });
};

//render sign in page
module.exports.signIn = function (req, res) {
  return res.render("user_sign_in", {
    title: "IConnect | Sign In",
  });
};

//get the sign up data
module.exports.create = function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("Error in finding user in signing up page");
      return;
    }

    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("Error in creating user in signing up page");
          return;
        }
        return res.redirect("/users/sign-in");
      });
    } else {
      return res.redirect("back");
    }
  });
};

//sign in and create session for the user
module.exports.createSession = function (req, res) {
  //steps to authenticate
  //find the user
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("Error in finding user in signing in");
      return;
    }
    //handle user found
    if (user) {
      //handle password which doesn't match
      if (user.password != req.body.password) {
        return res.redirect("back");
      }
      //handle session creation
      res.cookie("user_id", user.id);
      return res.redirect("/users/profile");
    } else {
      //handle user not found
      return res.redirect("back");
    }
  });
};
