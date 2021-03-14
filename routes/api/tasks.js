const router = require("express").Router();
const tasksController = require("../../controllers/tasksController");

router
  .route("/:userId/:projectId")
  .get(tasksController.findAllTasks)
  .post(tasksController.createTask);

router
  .route("/:userId/:projectId/:taskId")
  .get(tasksController.findTaskById)
  .put(tasksController.updateTask)
  .delete(tasksController.removeTask);

module.exports = router;
