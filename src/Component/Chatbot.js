// src/Chatbot.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = async () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, sender: 'user' }];
      setMessages(newMessages);
      setInput('');

      try {
        const response = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: input }],
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer YOUR_OPENAI_API_KEY`,
            },
          }
        );
        const botMessage = response.data.choices[0].message.content.trim();
        setMessages([...newMessages, { text: botMessage, sender: 'bot' }]);
      } catch (error) {
        console.error('Error fetching response from OpenAI:', error);
      }
    }
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faWhatsapp} />
      </button>
      {isOpen && (
        <div className="chatbot">
          <div className="messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>
              <FontAwesomeIcon icon={faWhatsapp} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
