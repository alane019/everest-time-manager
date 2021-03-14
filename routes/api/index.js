const router = require("express").Router();
const userRoutes = require("./users");
const projectRoutes = require("./projects");
const tasksRoutes = require("./tasks");
const actionsRoutes = require("./actions");

router.use("/users", userRoutes);
router.use("/projects", projectRoutes);
router.use("/tasks", tasksRoutes);
router.use("/action", actionRoutes);
module.exports = router;
