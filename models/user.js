const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  startTime: { type: Date, default: Date.now },
  active: Boolean,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
