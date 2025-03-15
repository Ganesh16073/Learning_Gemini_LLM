const UserService = require("../service/UserService");
class UserController {
  // Your controller for content route
  async getContent(req, res) {
    try {
        const prompt = req.body.prompt || "explain about tax"; // Default prompt
        const textStream = await UserService.generateTextStream(prompt); // Get the text stream

        // Set response headers
        res.setHeader("Content-Type", "text/plain"); // Send plain text content
        res.setHeader("Transfer-Encoding", "chunked"); // Ensure chunked transfer encoding

        // Stream content chunk by chunk
        for await (const chunk of textStream) {
            // Directly send the chunk (no need to wrap in a JSON object)
            res.write(chunk);  // Write the chunk directly to the response
        }

        res.end(); // End the response once all chunks are sent
    } catch (error) {
        res.status(500).json({ error: error.message }); // Return error message
    }
}


}
module.exports = new UserController();
