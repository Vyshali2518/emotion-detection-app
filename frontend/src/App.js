import React, { useState } from 'react';
import WebcamDetection from './components/WebcamDetection';
import ImageUpload from './components/ImageUpload';
import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState('webcam');
    const [emotionResults, setEmotionResults] = useState(null);

    const handleEmotionDetected = (results) => {
        setEmotionResults(results);
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>😊 Emotion Detection App</h1>
                <p>Detect emotions from facial expressions using AI</p>
            </header>
            <div className="tab-container">
                <button className={`tab-button ${activeTab === 'webcam' ? 'active' : ''}`} onClick={() => setActiveTab('webcam')}>
                    📹 Webcam Detection
                </button>
                <button className={`tab-button ${activeTab === 'upload' ? 'active' : ''}`} onClick={() => setActiveTab('upload')}>
                    📸 Image Upload
                </button>
            </div>
            <div className="content-container">
                {activeTab === 'webcam' && (
                    <WebcamDetection onEmotionDetected={handleEmotionDetected} />
                )}
                {activeTab === 'upload' && (
                    <ImageUpload onEmotionDetected={handleEmotionDetected} />
                )}
            </div>
            {emotionResults && (
                <div className="results-panel">
                    <h2>Detection Results</h2>
                    <div className="emotion-stats">
                        {emotionResults.emotions && Object.entries(emotionResults.emotions).map(([emotion, score]) => (
                            <div key={emotion} className="emotion-item">
                                <span className="emotion-label">{emotion}</span>
                                <div className="emotion-bar">
                                    <div className="emotion-fill" style={{ width: `${score * 100}%` }}></div>
                                </div>
                                <span className="emotion-score">{(score * 100).toFixed(1)}%</span>
                            </div>
                        ))}
                    </div>
                    {emotionResults.dominantEmotion && (
                        <div className="dominant-emotion">
                            <p>Dominant Emotion: <strong>{emotionResults.dominantEmotion}</strong></p>
                            <p>Confidence: <strong>{(emotionResults.confidence * 100).toFixed(1)}%</strong></p>
                        </div>
                    )}
                </div>
            )}
            <footer className="app-footer">
                <p>&copy; 2026 Emotion Detection App. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;