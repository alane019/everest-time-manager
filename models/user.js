const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  startTime: Date,
  active: Boolean,
  projects: [
    {
      project: String,
      color: String,
      tasks: [
        {
          task: String,
          color: String,
          totalDuration: Date,
          history: [
            {
              startTime: Date,
              endTime: Date,
              duration: Date,
            },
          ],
        },
      ],
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
