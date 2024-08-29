import mongoose from "mongoose";

const toDoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const toDoList = mongoose.model("ToDo", toDoSchema);

export default toDoList;
