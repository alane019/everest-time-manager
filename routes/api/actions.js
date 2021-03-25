const router = require("express").Router();
const actionsController = require("../../controllers/actionsController");

router
  .route("/:userId/:projectId/:taskId")
  .get(actionsController.findAllActions)
  .post(actionsController.addAction);

router
  .route("/:userId/:projectId/:taskId/:actionId")
  .get(actionsController.findActionById)
  .put(actionsController.endAction)
  .delete(actionsController.removeAction);

module.exports = router;
