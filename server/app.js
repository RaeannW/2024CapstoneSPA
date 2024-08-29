// 'Import' the Express module instead of http
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import todo from "./routers/todo.js";
// Initialize the Express application
const app = express();

//Load environment variables from .env file
dotenv.config();

// get the PORT from the environment variables, OR use 4040 as default
const PORT = process.env.PORT || 4040;

//database
mongoose.connect(process.env.MONGODB);

//db is database
const db = mongoose.connection;

//middleware for mongoose
db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

//middleware
const logging = (request, response, next) => {
  console.log(
    `${request.method} ${request.url} ${new Date().toLocaleString("en-us")}`
  );
  next();
};

// CORS (Cross-Origin Resource Sharing) Middleware
const cors = (request, response, next) => {
  response.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  response.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(cors);
//determines if it has json in body - determines if we can use in javascript
//convert before logging - order matters
app.use(express.json());
app.use(logging);

// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
  // Create the headers for response by default 200
  // Create the response body
  // End and return the response
  response.send(JSON.stringify({ message: "Service healthy" }));
});

app.use("/todo", todo);

// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
