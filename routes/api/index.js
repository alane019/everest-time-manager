const router = require("express").Router();
const userRoutes = require("./users");
const projectRoutes = require("./projects");
const tasksRoutes = require("./tasks");

router.use("/users", userRoutes);
router.use("/projects", projectRoutes);
router.use("/tasks", tasksRoutes);

module.exports = router;
