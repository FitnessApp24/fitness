import React, { useState } from 'react';

const Chatbox = () => {
  const [messages, setMessages] = useState<any>([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = async () => {
    if (input.trim() !== '') {
      // Add user message to messages array
      const newUserMessage = { text: input, sender: 'user' };
      setMessages((prevMessages: any) => [...prevMessages, newUserMessage]);
      setInput('');
  
    
      // Endpoint for searching food items
  
      try {
        const response = await fetch("/api/openai", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
    
          body: JSON.stringify({ input }),
        }); 
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
  
        const responseData = await response.json();
  
        if (!responseData?.content) {
          throw new Error('No results found');
        }
  
        // Extract relevant information from the first search result

  
        const botMessage = {
          text: responseData?.content,
          sender: 'bot'
        };
  
        // Add bot message to messages array
        setMessages((prevMessages: any) => [...prevMessages, botMessage]);
      } catch (error) {
        console.log('Error fetching response from API:', error);
        // Optionally, you can add an error message to inform the user about the issue
        const errorMessage = { text: 'Sorry, I could not retrieve nutritional information at the moment.', sender: 'bot' };
        setMessages((prevMessages: any) => [...prevMessages, errorMessage]);
      }
    }
  };
  const toggleChatbox = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div>
      <button className="fixed bottom-4 right-4 z-50 bg-blue-500 text-white py-2 px-4 rounded-full" onClick={toggleChatbox}>
        <img src="https://www.svgrepo.com/show/310556/bot.svg" className="w-12 h-12" />
      </button>
      {isOpen && (
        <div className="fixed bottom-16 right-4 z-50">
          <div className="w-full max-w-xs shadow-md rounded-lg p-4 bg-white">
            <div className="overflow-y-auto h-60 mb-4">
              {messages.map((message: any, index: number) => (
                <div
                  key={index}
                  className={`text-sm my-1 flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <span
                    className={`inline-block px-2 py-1 rounded-lg ${
                      message.sender === 'user' ? 'bg-blue-400 text-white' : 'bg-gray-200 text-black'
                    }`}
                  >
                    {message.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex">
              <input
                type="text"
                className="flex-grow border rounded-md p-2 mr-2 text-black"
                placeholder="Ask something about health and fitness"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSend();
                  }
                }}
              />
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={handleSend}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
