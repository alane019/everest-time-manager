const db = require("../models");

module.exports = {
  findAllTasks: function (req, res) {
    db.Task.find({ project: req.params.projectId })
      .sort({ date: -1 })
      .populate("project")
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findTaskById: function (req, res) {
    db.Task.findById({ _id: req.params.taskId })
      .populate("project")
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  createTask: function (req, res) {
    db.Task.create({
      ...req.body,
      user: req.params.userId,
      project: req.params.projectId,
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
