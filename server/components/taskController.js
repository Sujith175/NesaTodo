const asyncWrapper = require("../middlewares/async");
const { createCustomError } = require("../middlewares/custom-error");
const taskModel = require("../models/taskModel");

//get all tasks
const getTasks = asyncWrapper(async (req, res, next) => {
  const tasks = await taskModel.find({});
  res.status(200).json(tasks);
});

//get task with id
const getTask = asyncWrapper(async (req, res, next) => {
  const { id: TaskId } = req.params;

  const task = await taskModel.findOne({ _id: TaskId });

  if (!task) {
    return next(createCustomError("requested task not found", 404));
  }
  res.status(200).json({ success: true, task });
});

//create a new task
const createTask = asyncWrapper(async (req, res, next) => {
  const { title, status, description } = req.body;

  if (!title || !status) {
    return next(createCustomError("requested task not found", 404));
  }
  const task = await taskModel.create({ title, description, status });
  res.status(201).json({ success: true, task });
});

//update task
const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await taskModel.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError("requested task not found", 404));
  }
  res.status(200).json({ success: true, task });
});

//delete a task
const DeleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await taskModel.findOneAndDelete({ _id: taskId });
  if (!task) {
    return next(createCustomError("requested task not found", 404));
  }
  res.status(200).json({ success: true, task });
});

module.exports = {
  getTasks,
  createTask,
  getTask,
  updateTask,
  DeleteTask,
};
