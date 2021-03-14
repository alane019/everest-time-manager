const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: String,
  color: String,
  totalDuration: { type: Date },
  history: [
    {
      startTime: Date,
      endTime: { type: Date, default: Date.now },
      duration: Date,
    },
  ],
  userId: String,
  projectId: String,
});
const Task = mongoose.model("Task", projectSchema);

module.exports = Task;