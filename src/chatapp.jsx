import { useState } from 'react';
import './ChatApp.css';

const ChatApp = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [username, setUsername] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    const handleSendMessage = () => {
        if (!username.trim()) {
            alert('Please enter a username before sending messages.');
            return;
        }
        if (newMessage.trim() !== '') {
            setMessages((prevMessages) => [...prevMessages, { text: newMessage, username }]);
            setNewMessage('');
        }
    };

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <div className={`chat-app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <header className="chat-header">
                <h1 className="chat-title">Chat App</h1>
                <button className="mode-toggle" onClick={toggleDarkMode}>
                    {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
                </button>
            </header>
            <div className="chat-body">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    className="chat-input username-input"
                />
                <div className="messages">
                    {messages.length === 0 ? (
                        <p className="no-messages">No messages yet. Start the conversation!</p>
                    ) : (
                        messages.map((message, index) => (
                            <div
                                key={index}
                                className={`message ${message.username === username ? 'self' : 'other'}`}
                            >
                                <span className="username">{message.username}:</span>{' '}
                                <span className="text">{message.text}</span>
                            </div>
                        ))
                    )}
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="chat-input"
                    />
                    <button onClick={handleSendMessage} className="send-button">
                        ➤ Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatApp;
