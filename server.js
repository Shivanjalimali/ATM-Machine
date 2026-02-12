const express = require("express");
const mongoose = require("mongoose");
//const accountRoutes = require("./routes/accountRoute");

const app = express();

app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/ATM")
  .then(() => console.log("DB is connected"))
  .catch((err) => console.error("Could not connect to mongodb", err));

// test route
app.get("/", (req, res) => {
  res.send("hello shivanjali you are done with database also...");
});

// routes
app.use("/api", require("./routes/accountRoute"));

// start server
app.listen(3000, () => {
  console.log("server started successfully");
});
