import React, { useState } from "react";
import './ContentComponent.css';  // Import the CSS file for styling

const ContentComponent = () => {
    const [content, setContent] = useState("");  // To store the content from the response
    const [loading, setLoading] = useState(false); // To show loading state while data is being fetched
    const [error, setError] = useState(null);    // To store error message in case of failure
    const [prompt, setPrompt] = useState("");    // To store the prompt entered by the user

    const handlePromptChange = (event) => {
        setPrompt(event.target.value);  // Update the prompt based on user input
    };

    const fetchContent = async () => {
        setLoading(true);  // Start loading
        setContent("");  // Clear any previous content

        try {
            // Sending the prompt to the backend API via POST request
            const response = await fetch("http://localhost:8080/api/content", {
                method: "POST",  // POST method
                headers: {
                    "Content-Type": "application/json",  // Setting the content type as JSON
                },
                body: JSON.stringify({ prompt })  // Sending the prompt in the request body
            });

            if (!response.ok) {
                throw new Error("Failed to fetch content: " + response.statusText);
            }

            const reader = response.body.getReader(); // Get the reader to read the response stream
            const decoder = new TextDecoder(); // Used to decode the chunks into strings
            let contentStream = "";

            // Read and append the chunks as they arrive
            while (true) {
                const { done, value } = await reader.read();
                if (done) break; // End of stream

                const chunk = decoder.decode(value, { stream: true });
                contentStream += chunk;  // Append the chunk to content
                setContent(contentStream); // Update the displayed content
            }

        } catch (error) {
            console.error("Error fetching content:", error);
            setError("An error occurred while fetching the content. Please try again later.");
        } finally {
            setLoading(false);  // Hide loading once done
        }
    };

    return (
        <div className="content-container">
            <div className="prompt-input">
                <input
                    type="text"
                    value={prompt}
                    onChange={handlePromptChange}
                    placeholder="Enter your prompt"
                    className="prompt-input-field"
                />
                <button onClick={fetchContent} className="get-content-button">Get Content</button>  {/* Button to trigger fetching */}
            </div>

            {loading ? (
                <div className="loading">
                    <div className="spinner"></div>  {/* Spinner while loading */}
                    <p>Loading...</p>
                </div>
            ) : error ? (
                <div className="error">
                    <p>{error}</p>  {/* Display error if fetching fails */}
                </div>
            ) : (
                <div className="content">
                    {content.split("\n").map((line, index) => (
                        <p key={index}>{line}</p>  // Display each line as a separate <p> for better readability
                    ))}
                </div>
            )}
        </div>
    );
};

export default ContentComponent;
