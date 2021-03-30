const db = require("../models");

module.exports = {
  findAllActions: function (req, res) {
    db.Action.find({ user: req.params.userId })
      .sort({ date: -1 })
      .populate("project")
      .populate("task")
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findActionById: function (req, res) {
    db.Action.findById({ _id: req.params.actionId })
      .populate("project")
      .populate("task")
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  addAction: function (req, res) {
    db.Action.create({
      ...req.body,
      user: req.params.userId,
      project: req.params.projectId,
      task: req.params.taskId,
    })
      .then((dbModel) => {
        return db.Action.findById({ _id: dbModel._id })
          .populate("task")
          .populate("project")
          .then((dbModel) => res.json(dbModel));
      })
      .catch((err) => res.status(422).json(err));
  },
  endAction: function (req, res) {
    db.Action.findOneAndUpdate({ _id: req.params.actionId }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  removeAction: function (req, res) {
    db.Action.findById({ _id: req.params.projectId })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
