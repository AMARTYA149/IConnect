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
  //TODO later
};

//sign in and create session for the user
module.exports.createSession = function (req, res) {
  //TODO later
};
