const db = require("../models");

module.exports = {
  findAllTasks: function (req, res) {
    db.Task.find({ projectId: req.params.projectId })
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findTaskById: function (req, res) {
    db.Task.findById({ _id: req.params.taskId })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  createTask: function (req, res) {
    db.Task.create({
      ...req.body,
      userId: req.params.userId,
      projectId: req.params.projectId,
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  updateTask: function (req, res) {
    db.Task.findOneAndUpdate({ _id: req.params.taskId }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  removeTask: function (req, res) {
    db.Task.findById({ _id: req.params.projectId })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
