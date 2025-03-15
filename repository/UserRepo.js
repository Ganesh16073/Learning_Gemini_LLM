const GENAI = require('../utility/GenAI');
const SystemPrompt =require('../utility/systemPrompts');
class UserRepo{
    async generateTextStream(prompt) {
        try {
            const result = await GENAI.generateTextStream(`${SystemPrompt.CHARTERED_ACCOUNTANT} and below is the question \n ${prompt}`);
            return result;  // Return the stream from GenAi
        } catch (error) {
            throw new Error("Error in ContentRepository: " + error.message);
        }
    }
}
module.exports = new UserRepo();