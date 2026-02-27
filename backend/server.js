'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

// Route for emotion detection
app.post('/detect-emotion', (req, res) => {
    const { text } = req.body;
    // Placeholder for emotion detection logic
    const detectedEmotion = 'happy'; // This should be replaced with actual detection logic

    res.json({ emotion: detectedEmotion });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
