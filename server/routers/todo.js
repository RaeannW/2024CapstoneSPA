import { Router } from "express";
import ToDo from "../models/ToDo.js";

const router = Router();

// Create todo route
router.post("/", async (request, response) => {
  try {
    const newToDo = new ToDo(request.body);

    const data = await newToDo.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// Get all todo tasks route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await ToDo.find(query); // query or {}

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Delete a todo task by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await ToDo.findByIdAndDelete(request.params.id, {});

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

export default router;
