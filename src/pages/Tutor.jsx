import React, { useState } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';

const Tutor = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Hello! I am your Yukthi Path AI Tutor. What concept from Class 10 Science would you like to explore today? You can ask me to explain a concept, solve a problem, or test your knowledge.",
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    const newMsg = { id: Date.now(), sender: 'user', text: input };
    setMessages([...messages, newMsg]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: 'ai',
        text: "I am a simulated AI Tutor. In the full version, I will explain concepts using the Telangana State Board curriculum, provide visual aids, and help clarify your doubts step by step!"
      }]);
    }, 1000);
  };

  return (
    <div className="tutor-page h-full flex flex-col max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-3">
          <Bot className="text-accent-purple" size={36} />
          <span>Yukthi AI Tutor</span>
        </h1>
        <p className="text-muted">Your personalized science learning assistant</p>
      </div>

      <div className="glass-panel flex-1 flex flex-col overflow-hidden relative">
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-4 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${msg.sender === 'user' ? 'bg-accent-teal text-black' : 'bg-bg-tertiary border border-accent-purple text-accent-purple'}`}>
                {msg.sender === 'user' ? <User size={20} /> : <Bot size={20} />}
              </div>
              <div className={`max-w-[80%] p-4 rounded-2xl ${msg.sender === 'user' ? 'bg-accent-teal/10 border border-accent-teal/20 text-text-primary rounded-tr-none' : 'bg-bg-tertiary border border-border-glass rounded-tl-none'}`}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Suggested Queries */}
        <div className="px-6 pb-2 flex gap-2 overflow-x-auto">
          <button className="text-xs bg-bg-tertiary border border-border-glass px-3 py-1.5 rounded-full whitespace-nowrap hover:border-accent-purple text-muted transition-colors">
            Explain Ohm's Law
          </button>
          <button className="text-xs bg-bg-tertiary border border-border-glass px-3 py-1.5 rounded-full whitespace-nowrap hover:border-accent-purple text-muted transition-colors">
            What is a redox reaction?
          </button>
          <button className="text-xs bg-bg-tertiary border border-border-glass px-3 py-1.5 rounded-full whitespace-nowrap hover:border-accent-purple text-muted transition-colors">
            Quiz me on Biology
          </button>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-border-glass bg-[rgba(0,0,0,0.2)]">
          <form onSubmit={handleSend} className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question or type a concept..."
              className="w-full bg-bg-tertiary border border-border-glass rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-accent-purple transition-colors"
            />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-accent-purple text-white rounded-full hover:scale-105 transition-transform"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tutor;
