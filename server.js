const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("RijAI server is connected 🤖");
});

app.listen(3000, () => {
  console.log("RijAI is running");
});
