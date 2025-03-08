const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/service", (req, res) => {
  res.sendFile(path.join(__dirname, "services.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "notfound.html"));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
