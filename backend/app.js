const express = require("express");
const cors = require("cors");
const adminRoutes = require("./routes/admin");
const { errorHandler } = require("./middlewares/error");

const app = express();

// parse json request body
app.use(express.json());

app.use(
  cors({
    origin: "*", // Replace * with the actual origins of cosumers
  })
);

// home route
app.get("/", (req, res) => {
  res.send("Hey There! Welcome to Uniblox API");
});

app.use("/v1/admin", adminRoutes);

// send back a not found error for any unknown api request
app.use((req, res, next) => {
  next(new Error("Not found"));
});

// handle error
app.use(errorHandler);

module.exports = app;
