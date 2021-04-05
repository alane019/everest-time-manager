const db = require("../models");
const express = require("express");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
// Defining methods for the booksController
module.exports = {
  findAllUsers: function (req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findUserById: function (req, res) {
    db.User.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  createUser: function (req, res) {
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  updateUser: function (req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  removeUser: function (req, res) {
    db.User.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findUserByEmail: function (req, res) {
    db.User.find({
      email: req.params.email,
    })
      .then((dbModel) => {
        res.json(dbModel[0].question);
      })
      .catch((err) => res.status(422).json(err));
  },
  findUserByEmailAndAnswer: function (req, res) {
    db.User.find({
      email: req.params.email,
    })
      .then((dbModel) => {
        if (dbModel[0].answer === req.params.answer) {
          console.log(dbModel[0]._id);
          res.json(dbModel[0]._id);
        }
      })
      .catch((err) => res.status(422).json(err));
  },
  getLoggedUser: async function (req, res) {
    try {
      // request.user is getting fetched from Middleware after token authentication
      const user = await User.findById(req.user.id);
      res.json(user);
    } catch (e) {
      res.send({ message: "Error in Fetching user" });
    }
  },
};
