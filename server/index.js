const express = require("express");
const app = express(); // create express app
const path = require("path");

// app.get("/", (req, res) => {
//   res.send("This is from express.js");
// });

//add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.get("/", (req, res) => {
 res.sendFile(path.join(__dirname, "public", "index.html"));
});

// start express server on port 5000
app.listen(process.env.PORT || 5000, () => {
  console.log("server started on port 5000");
});