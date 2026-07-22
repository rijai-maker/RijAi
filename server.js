const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// Home route
app.get("/", (req, res) => {
  res.send("RijAI server is running 🚀");
});


// Chat system
app.post("/chat", (req, res) => {

  const message = (req.body.message || "").toLowerCase();

  let reply = "I am RijAI. I am still learning and improving every day. 🤖";


  if (message.includes("hello") || message.includes("hi")) {

    reply = "Hello! I am RijAI, your futuristic AI assistant. How can I help you today?";

  }


  else if (
    message.includes("who made you") ||
    message.includes("who created you")
  ) {

    reply = "I was proudly created by Rijan Dhakal, a visionary developer from Nepal. I am designed with creativity, innovation, and a passion for technology.";

  }


  else if (message.includes("how are you")) {

    reply = "I am running smoothly and I am ready to assist you.";

  }


  else if (
    message.includes("namaste") ||
    message.includes("नमस्ते")
  ) {

    reply = "नमस्ते! म RijAI हुँ। म तपाईंलाई सहयोग गर्न तयार छु।";

  }


  else if (
    message.includes("nepal") ||
    message.includes("नेपाल")
  ) {

    reply = "नेपाल हिमाल, संस्कृति र प्राकृतिक सौन्दर्यले भरिएको सुन्दर देश हो।";

  }


  else if (
    message.includes("essay") ||
    message.includes("write")
  ) {

    reply = "I can help you write essays. Please tell me the topic, and I will create one for you.";

  }


  res.json({
    answer: reply
  });

});


// Start server
app.listen(3000, () => {

  console.log("RijAI is running 🚀");

});
