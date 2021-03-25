const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const actionSchema = new Schema({
  name: String,
  color: String,
  startTime: Date,
  endTime: Date,
  duration: Date,
  task: { type: Schema.Types.ObjectId, ref: "Task" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  project: { type: Schema.Types.ObjectId, ref: "Project" },
});
const Action = mongoose.model("Action", actionSchema);

module.exports = Action;
