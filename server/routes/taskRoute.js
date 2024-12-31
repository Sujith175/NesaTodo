const express = require("express");
const {
  getTasks,
  createTask,
  updateTask,
  DeleteTask,
  getTask,
} = require("../components/taskController");

const router = express.Router();

//application routes
router.route("/").get(getTasks).post(createTask);
router.route("/:id").patch(updateTask).delete(DeleteTask).get(getTask);

module.exports = router;
