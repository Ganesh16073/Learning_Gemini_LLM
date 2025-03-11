require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");
const bodyParser = require("body-parser");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello from Ganesh");
});

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "Explain how AI works";

const generate = async (prompt) => {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.log("Error is " + error);
  }
};
// generate();

app.get("/api/content", async (req, res) => {
  try {
    const data = req.body.question;
    const result = await generate(data);
    res.send({
      prompt: data,
      result: result,
    });
  } catch (error) {
    res.send({"error": error});
  }
});

app.listen(8082, () => {
  console.log("Srever is running on port number : 8082");
});
