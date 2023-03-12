const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: [2, "Name requires 2 characters or more"],
    required: [true, "Name is required"]
  },
  email: {
    type: String,
    unique: [true, "Invalid email"],
    required: [true, "Email address is required"],
    match: [ /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Please fill a valid email address']
  }, 
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [5, "Your password should have at least 5 characters"]
  }
}, { timestamps: true })




UserSchema.plugin(uniqueValidator);
module.exports.User = mongoose.model("User", UserSchema);