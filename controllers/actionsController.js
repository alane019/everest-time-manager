const db = require("../models");

module.exports = {
  findAllActions: function (req, res) {
    db.Action.find({ projectId: req.params.projectId })
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findActionById: function (req, res) {
    db.Action.findById({ _id: req.params.taskId })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  createAction: function (req, res) {
    db.Action.create({
      ...req.body,
      userId: req.params.userId,
      projectId: req.params.projectId,
      taskId: req.params.taskId,
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  updateAction: function (req, res) {
    db.Action.findOneAndUpdate({ _id: req.params.taskId }, req.body)
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
