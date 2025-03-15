require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");
const bodyParser = require("body-parser");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const GENAI=require('./utility/GenAI');

const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello from Ganesh");
});


const promptdata = "Explain how AI works";

const generate = async (prompt) => {
    try {
        const result = await model.generateContent(prompt);
        return result;
    } catch (error) {
        console.log("Error is " + error);
        throw error; //rethrow the error.
    }
    };
// generate();

//  generateTextStream= async (prompt) => {
//     try {
//         const result = await this.model.generateContentStream(prompt);
//         const stream = result.stream;

//         async function* textGenerator() {
//             for await (const chunk of stream) {
//                 const text = chunk.text();
//                 if (text) {
//                     yield text;
//                 }
//             }
//         }
//         return textGenerator();

//     } catch (error) {
//         console.error("Error generating text stream:", error);
//         throw error;
//     }
// }

app.get("/api/content", async (req, res) => {
    try {
        res.setHeader('Content-Type', 'text/plain'); // Set content type for streaming
        const result = await GENAI.generateTextStream(promptdata);
        for await (const chunk of result) {
            res.write(chunk); // Send each chunk to the client
        }
        res.end(); // End the response
    } catch (error) {
        res.status(500).send({"error": error.message});
    }
});

app.listen(8082, () => {
  console.log("Srever is running on port number : 8082");
});
