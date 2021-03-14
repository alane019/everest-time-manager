const router = require("express").Router();
const actionsController = require("../../controllers/actionsController");

router
  .route("/:userId/:projectId/:taskId")
  .get(actionsController.findAllActions)
  .post(actionsController.createAction);

router
  .route("/:userId/:projectId/:taskId/:actionId")
  .get(actionsController.findActionById)
  .put(actionsController.updateAction)
  .delete(actionsController.removeAction);

module.exports = router;
