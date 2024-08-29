import mongoose from "mongoose";

const toDoSchema = new mongoose.Schema({
  task: {
    type: String
  }
});

const toDoList = mongoose.model("ToDo", toDoSchema);

export default toDoList;
