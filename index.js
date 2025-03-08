const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const data = fs.readFileSync("index.html");
  res.send(data.toString());
});
app.get("/about", (req, res) => {
  const data = fs.readFileSync("about.html");
  res.send(data.toString());
});
app.get("/service", (req, res) => {
  const data = fs.readFileSync("services.html");
  res.send(data.toString());
});
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "notfound.html"));
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
