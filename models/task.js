const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: String,
  user: { type: Schema.Types.ObjectId, ref: "User" },
  project: { type: Schema.Types.ObjectId, ref: "Project" },
  disable: { type: Boolean, default: false },
});
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
