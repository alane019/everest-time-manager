const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  userId: String,
  name: String,
  color: String,


});
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
