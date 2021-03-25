const db = require("../models");

module.exports = {
  findAllActions: function (req, res) {
    db.Action.find({ project: req.params.projectId })
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findActionById: function (req, res) {
    db.Action.findById({ _id: req.params.actionId })
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
      .then((dbModel) => res.json(dbModel))
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
