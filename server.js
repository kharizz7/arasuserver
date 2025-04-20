const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "*" })); // Allow frontend origin

// ✅ Proxy Google Drive audio files
app.get("/proxy/audio", async (req, res) => {
    const fileId = req.query.id;
    if (!fileId) {
        return res.status(400).json({ error: "File ID is required" });
    }

    try {
        console.log("Fetching file:", fileId);
        const fileUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
        const response = await axios.get(fileUrl, { responseType: "stream" });

        res.setHeader("Content-Type", "audio/mp3");
        response.data.pipe(res); // Stream the audio to the frontend
    } catch (error) {
        console.error("Error fetching Google Drive file:", error.message);
        res.status(500).json({ error: "Failed to fetch audio file" });
    }
});

// ✅ Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
