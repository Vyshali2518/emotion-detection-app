# Emotion Detection App

A web-based application that detects emotions from facial expressions using real-time webcam feed or uploaded images. Built with React.js frontend, Node.js/Express backend, and face-api.js for facial recognition.

## Features

- **Real-time Webcam Detection**: Detect emotions in real-time using your webcam
- **Image Upload**: Upload images to detect emotions in static photos
- **Multiple Emotion Detection**: Detects happy, sad, angry, fearful, disgusted, surprised, and neutral emotions
- **Confidence Scores**: Shows confidence levels for each detected emotion
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

### Frontend
- React.js
- face-api.js (TensorFlow.js-based)
- Axios for API calls
- CSS3 for styling

### Backend
- Node.js
- Express.js
- Multer for file uploads
- CORS for cross-origin requests

## Project Structure

```
emotion-detection-app/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── routes/
│   │   └── emotion.js
│   └── uploads/ (created at runtime)
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── WebcamDetection.js
│   │   │   ├── ImageUpload.js
│   │   │   └── EmotionResults.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   └── package.json
└── README.md
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a .env file (optional, for future configurations):
```bash
PORT=5000
NODE_ENV=development
```

4. Start the server:
```bash
npm start
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## Usage

1. Open the app in your browser at `http://localhost:3000`
2. Choose between:
   - **Webcam Detection**: Allow camera access and see real-time emotion detection
   - **Image Upload**: Upload an image to detect emotions in that image
3. View the detected emotions with confidence scores

## API Endpoints

### POST /api/emotion/detect-image
Analyzes an uploaded image for emotions.

**Request:**
- Content-Type: multipart/form-data
- Body: FormData with `image` file

**Response:**
```json
{
  "success": true,
  "emotions": {
    "happy": 0.95,
    "sad": 0.02,
    "angry": 0.01,
    "fearful": 0.01,
    "disgusted": 0.01,
    "surprised": 0.00,
    "neutral": 0.00
  },
  "dominantEmotion": "happy",
  "confidence": 0.95
}
```

## Future Enhancements

- [ ] Add emotion history tracking
- [ ] Implement emotion trends analysis
- [ ] Add support for multiple face detection
- [ ] Database integration for storing results
- [ ] User authentication
- [ ] Advanced emotion analysis with confidence thresholds

## License

MIT License

## Contributing

Contributions are welcome! Feel free to fork, create a feature branch, and submit a pull request.

## Support

For issues or questions, please create an issue in this repository.
