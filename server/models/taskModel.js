const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: ["true", "Please Provide a value"],
      trim: true,
      maxlength: [20, "Name can not be more than 20 Charaters"],
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      default: "pending",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);
