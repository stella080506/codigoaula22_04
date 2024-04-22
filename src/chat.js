import React, { useState } from 'react';
import './chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isUpperCase, setIsUpperCase] = useState(true);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const toggledMessage = {
        original: newMessage,
        modified: isUpperCase ? newMessage.toUpperCase() : newMessage.toLowerCase()
      };
      setMessages([...messages, toggledMessage.modified]);
      setNewMessage('');
      setIsUpperCase(!isUpperCase);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            {msg}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
};

export default Chat;
