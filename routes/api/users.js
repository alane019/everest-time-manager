const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router
  .route("/")
  .get(usersController.findAllUsers)
  .post(usersController.createUser);

router
  .route("/:id")
  .get(usersController.findUserById)
  .put(usersController.updateUser)
  .delete(usersController.removeUser);

module.exports = router;
