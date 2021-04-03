const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  question: { type: String, required: true },
  answer: { type: String, required: true },
  activeAction: { type: Schema.Types.ObjectId, ref: "Action" },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
