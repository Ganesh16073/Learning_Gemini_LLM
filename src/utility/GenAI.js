require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

class GenAi {
  constructor() {
    this.genAi = new GoogleGenerativeAI(process.env.API_KEY);
    this.model = this.genAi.getGenerativeModel({
      model: process.env.GEMINI_MODEL,
    });
  }

  generateWithPrompt = async (prompt, systemPrompt = null) => {
    let generationConfig = {};
    if (systemPrompt) {
      generationConfig = {
        generationConfig: {
          systemInstruction: systemPrompt,
        },
      };
    }
    const parts = [{ text: prompt }];
    try {
      const result = await this.model.generateContent({
        contents: parts,
        ...generationConfig,
      });
      return result.response.text();
    } catch (error) {
      console.log(`Error occured is ` + error);
      return null;
    }
  };
}
module.exports = new GenAi();
