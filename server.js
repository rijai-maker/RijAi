const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("RijAI server is connected 🤖");
});

app.listen(3000, () => {
  console.log("RijAI is running");
});
