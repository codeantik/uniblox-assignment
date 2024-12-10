const express = require("express");
const cors = require("cors");
const adminRoutes = require("./routes/admin");
const cartRoutes = require("./routes/cart");
const checkoutRoutes = require("./routes/checkout");
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
  res.status(200).send("Hey There! Welcome to Uniblox API");
});

app.use("/v1/admin", adminRoutes);
app.use("/v1/cart", cartRoutes);
app.use("/v1/checkout", checkoutRoutes);

// handle error
app.use(errorHandler);

module.exports = app;
