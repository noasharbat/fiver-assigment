import React, { useState } from 'react';
import './MessageInput.css';

const MessageInput = ({ onSend, disabled }) => {
    const [text, setText] = useState('');

    const handleSend = () => {
        if (!text) return;
        onSend(text);
        setText('');
    };

    return (
        <div className="message-input-container">
            <input
                className="message-input"
                placeholder="Type a message..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' ? handleSend() : null}
            />
            <button
                className="send-btn"
                onClick={handleSend}
                disabled={disabled}
            >
                Send
            </button>
        </div>
    );
};

export default MessageInput;
