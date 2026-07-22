const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("RijAI server is running 🚀");
});


app.post("/chat", (req, res) => {

  const message = (req.body.message || "").toLowerCase();

  let reply = "I am RijAI, a futuristic AI assistant. I am continuously learning and improving. 🤖";


  // Greetings
  if (message.includes("hello") || message.includes("hi")) {

    reply = "Hello! I am RijAI, your futuristic AI assistant. How can I help you today?";

  }


  // Creator
  else if (
    message.includes("who made you") ||
    message.includes("who created you")
  ) {

    reply = "I was proudly created by Rijan Dhakal, a creative developer from Nepal with a passion for technology, innovation, and building the future of AI.";

  }


  // Rabin information
  else if (
    message.includes("who is rabin") ||
    message.includes("rabin")
  ) {

    reply = "Rabin is the son of Tara Kharel and the brother of Rijan Dhakal, the creator of RijAI. He is a special part of the RijAI journey.";

  }


  // RijAI name
  else if (message.includes("your name")) {

    reply = "My name is RijAI. I am a futuristic AI assistant designed to provide knowledge, ideas, and solutions.";

  }


  // Maths formulas
  else if (
    message.includes("a+b whole square") ||
    message.includes("(a+b)^2") ||
    message.includes("a plus b whole square")
  ) {

    reply = "(a+b)² = a² + 2ab + b²";

  }


  else if (
    message.includes("a-b whole square") ||
    message.includes("(a-b)^2") ||
    message.includes("a minus b whole square")
  ) {

    reply = "(a-b)² = a² - 2ab + b²";

  }


  else if (
    message.includes("a square minus b square")
  ) {

    reply = "a² - b² = (a+b)(a-b)";

  }


  // Nepal
  else if (
    message.includes("nepal") ||
    message.includes("नेपाल")
  ) {

    reply = "Nepal is a beautiful country famous for the Himalayas, Mount Everest, diverse cultures, and natural beauty.";

  }


  // Nepali greeting
  else if (
    message.includes("namaste") ||
    message.includes("नमस्ते")
  ) {

    reply = "नमस्ते! म RijAI हुँ। म तपाईंलाई सहयोग गर्न तयार छु।";

  }


  // Essay
  else if (
    message.includes("essay") ||
    message.includes("write")
  ) {

    reply = "Sure! Tell me the topic, and I will help you create a well-written essay.";

  }


  // How are you
  else if (message.includes("how are you")) {

    reply = "I am running smoothly and ready to assist you with knowledge and creativity.";

  }


  res.json({
    answer: reply
  });

});


app.listen(3000, () => {

  console.log("RijAI is running 🚀");

});
