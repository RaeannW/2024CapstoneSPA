import mongoose from "mongoose";

const goalsSchema = new mongoose.Schema({
  goal: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const goalList = mongoose.model("Goals", goalsSchema);

export default goalList;
