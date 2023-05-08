const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.use(cors());

// PARSES DATA FROM THE BODY
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// PARSES DATA FROM COOKIES
app.use(cookieParser());

app.get("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Hello from the Server...",
  });
});

// ERROR HANDLING MIDDLEWARE
app.use(globalErrorHandler);

module.exports = app;
