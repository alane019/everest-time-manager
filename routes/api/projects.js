const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");
const auth = require("../../config/middleware/auth");
router
  .route("/:userId")
  .get(auth, projectsController.findAllProjects)
  .post(auth, projectsController.createProject);

router
  .route("/:userId/:projectId")
  .get(auth, projectsController.findProjectById)
  .put(auth, projectsController.updateProject)
  .delete(auth, projectsController.removeProject);

module.exports = router;
