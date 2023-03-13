require('dotenv').config();
const cors = require('cors');
const express = require('express');

const passport = require('passport'); // import passport
const passportLocal = require('passport-local').Strategy;  // import passport local strategy
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 5000;

require('./config/mongoose.config');
require("./config/passport.config")(passport);

app.use(cors({  
  origin: `http://localhost:5173`,   // location of react app 
  credentials: true
  }
));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 60 * 60 * 1000 * 5 }
}))

app.use(cookieParser(process.env.SESSION_SECRET))
app.use(passport.initialize());
app.use(passport.session());


require('./routers/bonds.route')(app);
// route module instance
require('./routers/user.route')(app);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})