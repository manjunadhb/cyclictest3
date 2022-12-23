const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const app = express();
dotenv.config();
let PORT = 8080 || process.env.PORT;

app.get("*", (req, res) => {
  res.send("<h1>This is from NodeJS</h1>");
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`.bgMagenta);
});
