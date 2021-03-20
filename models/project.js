const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  userId: String,
  name: String,
  color: String,
  startTime: { type: Date, default: Date.now },
  active: Boolean,
  createdAt: {
    type: Date,
    default: Date.now(),
  }

});
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
