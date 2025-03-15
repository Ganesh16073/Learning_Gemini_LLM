## sample Result response of llm
{
    "prompt": "Tell about you",
    "result": {
        "response": {
            "candidates": [
                {
                    "content": {
                        "parts": [
                            {
                                "text": "I am a large language model, trained by Google.  I don't have personal experiences, emotions, or a physical body.  My purpose is to process information and respond to a wide range of prompts and questions in a comprehensive and informative way.  I access and process information from a massive dataset of text and code, allowing me to generate text, translate languages, write different kinds of creative content, and answer your questions in an informative way.\n\nThink of me as a sophisticated search engine and writing assistant combined. I can't \"think\" in the same way a human does, but I can analyze information and synthesize it into coherent and relevant responses.  My knowledge cutoff is September 2021, meaning I don't have information about events after that date.\n\nI am constantly learning and improving, but I am still under development.  While I strive to provide accurate and helpful information, it's important to remember that my responses should be critically evaluated, especially on complex or sensitive topics.  I am a tool, and the responsibility for using that tool appropriately rests with the user.\n"
                            }
                        ],
                        "role": "model"
                    },
                    "finishReason": "STOP",
                    "citationMetadata": {
                        "citationSources": [
                            {
                                "startIndex": 332,
                                "endIndex": 455,
                                "uri": "https://blog.ironmarkusa.com/the-6-free-marketing-tools-every-marketer-needs-to-use"
                            }
                        ]
                    },
                    "avgLogprobs": -0.1802258111734306
                }
            ],
            "usageMetadata": {
                "promptTokenCount": 3,
                "candidatesTokenCount": 226,
                "totalTokenCount": 229,
                "promptTokensDetails": [
                    {
                        "modality": "TEXT",
                        "tokenCount": 3
                    }
                ],
                "candidatesTokensDetails": [
                    {
                        "modality": "TEXT",
                        "tokenCount": 226
                    }
                ]
            },
            "modelVersion": "gemini-1.5-flash"
        }
    }
}