const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

module.exports = (passport) => {
  passport.use(
    new localStrategy({
      usernameField: 'email',
      passwordField: 'password'
    }, async (email, password, done) => {
      try {
        const user = await User.findOne({email});
        // if user does not exist
        if (!user) {
          return done(null, false, {message: "User not registered"})
        }
        // email exist and verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          return done(null, user, {message: "Successfully logged in"});
        } else {
          return done(null, false, {message: "Incorrect password"})
        }
      } catch (err) {
        done(err)
      }
    })
  );
};

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
  User.findOne({ _id: id }, (err, user) => {
    // const userInformation = {
    //   user: id,
    // };
    cb(err, user);
  });
});
