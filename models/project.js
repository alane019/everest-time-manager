const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  name: String,
  color: String,
  disable: { type: Boolean, default: false },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
