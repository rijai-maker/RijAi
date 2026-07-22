const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.post("/chat", (req, res) => {

  const message = req.body.message.toLowerCase();

  let reply = "I am still learning, but I am continuously evolving to become a better AI assistant. 🤖";


  if (message.includes("hello") || message.includes("hi")) {

    reply = "Hello! I am RijAI, your futuristic AI assistant. How can I assist you today?";

  }


  else if (message.includes("your name")) {

    reply = "My name is RijAI, an advanced AI assistant created to help, inspire, and provide intelligent solutions.";

  }


  else if (message.includes("who made you") || message.includes("who created you")) {

    reply = "I was proudly created by Rijan Dhakal, a visionary developer from Nepal. I am designed with creativity, innovation, and a passion for technology to become a powerful AI assistant.";

  }


  else if (message.includes("how are you")) {

    reply = "I am operating smoothly and ready to assist you with knowledge, ideas, and solutions.";

  }


  else if (message.includes("nepal")) {

    reply = "Nepal is a remarkable nation known for its breathtaking Himalayas, rich culture, and incredible natural beauty.";

  }


  else {

    reply = "I am RijAI. I received your question, and I am ready to help you. As I continue evolving, my intelligence will keep improving.";

  }


  res.json({
    answer: reply
  });

});


app.listen(3000, () => {

console.log("RijAI is running 🚀");

});
