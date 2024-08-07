// ChatBot.js
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function ChatBot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
        if (input.trim() === '') return;

        const userMessage = { text: input, from: 'user' };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput('');

        try {
            const response = await axios.post('https://api.openai.com/v1/engines/gpt-3.5-chat/completions', {
                prompt: newMessages.map(msg => msg.text).join('\n'),
                max_tokens: 150,
            }, {
                headers: {
                    'Authorization': `Bearer MY_OPENAI_API_KEY`
                }
            });

            const botMessage = { text: response.data.choices[0].text, from: 'bot' };
            setMessages(prevMessages => [...prevMessages, botMessage]);
        } catch (error) {
            console.error('Failed to fetch response:', error);
            // Fallback message if the API call fails
            const errorMessage = { text: "Sorry, I'm having trouble connecting right now. Please try again later!", from: 'bot' };
            setMessages(prevMessages => [...prevMessages, errorMessage]);
        }
    };

    return (
        <div className="card chatbot-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="container my-3" style={{ maxWidth: '100%', paddingBottom: '60px' }}>
                <div className="card" style={{ height: '80vh', display: 'flex', flexDirection: 'column' }}>
                    <div className="card-header bg-dark text-white">Chat with Movie Bot</div>
                    <div className="card-body bg-light" style={{ flex: 1, overflowY: 'auto' }}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`text-${msg.from === 'user' ? 'right' : 'left'}`}>
                                <span className={`badge bg-${msg.from === 'user' ? 'primary' : 'secondary'}`}>
                                    {msg.text}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="card-footer">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="form-control"
                            placeholder="Type your message..."
                            onKeyPress={(event) => event.key === 'Enter' ? sendMessage() : null}
                        />
                        <button className="btn btn-dark mt-2" onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div></div>
    );
}

export default ChatBot;
