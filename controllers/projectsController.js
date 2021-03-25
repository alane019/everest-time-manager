const db = require("../models");

module.exports = {
  findAllProjects: function (req, res) {
    db.Project.find({ userId: req.params.userId })
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findProjectById: function (req, res) {
    db.Project.findById({ _id: req.params.projectId })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  createProject: function (req, res) {
    db.Project.create({ ...req.body, user: req.params.userId })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  updateProject: function (req, res) {
    db.Project.findOneAndUpdate({ _id: req.params.projectId }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  removeProject: function (req, res) {
    db.Project.findById({ _id: req.params.projectId })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
