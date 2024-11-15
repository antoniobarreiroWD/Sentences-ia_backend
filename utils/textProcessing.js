const axios = require("axios");
require("dotenv").config();

const HUGGINGFACE_API_KEY = process.env.HUGGINGFACE_API_KEY;

const summarizeText = async (text) => {
    try {
        
        const payload = {
            inputs: text,
            parameters: {
                max_length: 300, 
                min_length: 100, 
            },
        };

        
        const response = await axios.post(
            "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
            payload,
            {
                headers: {
                    Authorization: `Bearer ${HUGGINGFACE_API_KEY}`,
                },
            }
        );

   
        if (response.data && response.data[0]?.summary_text) {
            return response.data[0].summary_text.trim();
        } else {
            console.error("Formato de respuesta inválido:", response.data);
            throw new Error("Formato de respuesta inválido");
        }
    } catch (error) {
        console.error("Error al resumir texto:", error.response?.data || error.message);
        throw error;
    }
};

module.exports = { summarizeText };
