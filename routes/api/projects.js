const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

router
  .route("/:userId")
  .get(projectsController.findAllProjects)
  .post(projectsController.createProject);

router
  .route("/:userId/:projectId")
  .get(projectsController.findProjectById)
  .put(projectsController.updateProject)
  .delete(projectsController.removeProject);

module.exports = router;
