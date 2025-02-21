import React, { useState } from 'react';
import '../styles/Goals.css';

function Goals() {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userInput = formData.get('user_input');
        alert(userInput);
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
        </div>
    );
}

export default Goals;
