import React, { useState } from 'react';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    setResponse("I'm still learning! Try asking about movies.");
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">Chat with AI</h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="Ask me about movies..."
      />
      <button onClick={handleSend} className="mt-2 bg-blue-500 text-white p-2 rounded">
        Send
      </button>
      <p className="mt-2">{response}</p>
    </div>
  );
};

export default Chatbot;
