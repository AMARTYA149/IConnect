const passport = require("passport");
const googleStrategy = require("passport-google-oauth").OAuth2Strategy;
const crypto = require("crypto");
const User = require("../models/user");

//tell passport to use a new strategy for google login
passport.use(
  new googleStrategy(
    {
      clientID:
        "179533141558-h1pbq83ml4u39ecru995089ph6nb2dkp.apps.googleusercontent.com",
      clientSecret: "clUfbw3KauTtLJiV7aeIQjlL",
      callbackURL: "http://localhost:8000/users/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      // find a user
      User.findOne({ email: profile.emails[0].value }).exec(function (
        err,
        user
      ) {
        if (err) {
          console.log(" Error in Google Strategy Passport", err);
          return;
        }
        console.log(accessToken, refreshToken);
        console.log(profile);

        if (user) {
          // if found, set this user as req.user
          return done(null, user);
        } else {
          // if not found, create a new user and set is as req.user
          User.create(
            {
              email: profile.emails[0].value,
              name: profile.displayName,
              password: crypto.randomBytes(20).toString("hex"),
            },
            function (err, user) {
              if (err) {
                console.log(
                  " Error in creating user Google strategy passport",
                  err
                );
                return;
              }
              return done(null, user);
            }
          );
        }
      });
    }
  )
);

module.exports = passport;
