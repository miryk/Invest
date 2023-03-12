const { User } = require('../models/user.model');
const bcrypt = require("bcrypt");
const passport = require('passport');

module.exports.test = (req, res) => {
  res.json({ message: "Backend is functioning"});
}

module.exports.createUser = async (req, res) => {
  try {
    const usedMail = User.exists({email: req.body.email});
    if (!usedMail) {
      throw err;
    } else {
      const hashpassword = await bcrypt.hash(req.body.password, 10);
      const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashpassword
      })
      res.json(newUser)
    }
  } catch (err) {
    res.status(400);
    res.send(err)
  }
}

module.exports.loginUser = async (req, res, next) => {
  passport.authenticate("local",  (err, user, info) => {
    console.log(info)
    if (err) throw err;
    if (!user) res.send("No User exists"); 
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Succesfully Authenticated");
        console.log(req.user)
      })
    }
  })(req, res, next)
}

// module.exports.loginUser = passport.authenticate("local", {
//   successRedirect: '/api/home',
//   failureRedirect: "/api/login"
// })



module.exports.logoutUser = async (req, res, next) => {
  req.logout(err => {
    if (err) return next(err)
  })
  // res.redirect('/login');
  console.log('user logged out')
}