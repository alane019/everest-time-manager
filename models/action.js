const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const actionSchema = new Schema({
  name: String,
  color: String,
  startTime: Date,
  endTime: { type: Date, default: Date.now },
  duration: Date,
  taskId: String,
  userId: String,
  projectId: String,
});
const Action = mongoose.model("Action", actionSchema);

module.exports = Action;
