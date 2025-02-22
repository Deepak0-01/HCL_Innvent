import React, { useState } from 'react';
import '../styles/Goals.css';

function Goals() {
    const [input, setInput] = useState('');
    const [recommendations, setRecommendations] = useState(['1','2','3']);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userInput = formData.get('user_input');
        console.log(userInput);
        try {
            const response = await fetch('http://localhost:3000/store', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: userInput }),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log('Response:', data);
            return data;
        } catch (error) {
            console.error('Error:', error);
        }
        setInput('');
    };

    return (
        <div className="container">
            <div className="goal-box">
                <form onSubmit={handleSubmit} className="goal-form">
                    <textarea
                        name="user_input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="goal-textarea"
                        placeholder="Enter your goals..."
                    />
                    <button type="submit" className="goal-button">
                        View Recommendation
                    </button>
                </form>
            </div>
            <div className="recommendations-container">
            <div>Recommendation Panel</div>
      {recommendations.map((recommendation, index) => (
        <div key={index} className="recommendation-card">
          {recommendation}
        </div>
      ))}
    </div>
        </div>
    );
}

export default Goals;
