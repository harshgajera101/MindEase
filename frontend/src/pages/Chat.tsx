import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Heart, Sparkles, MessageCircle, Zap } from "lucide-react";

export default function Chat() {
  const [messages, setMessages] = useState<{ text: string; sender: string; timestamp: Date }[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  // const [isConnected, setIsConnected] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Bot responses with more variety
  const botResponses = [
    "I hear you, and I want you to know that your feelings are completely valid. 💛",
    "Thank you for sharing that with me. It takes courage to open up. ✨",
    "I'm here to listen without judgment. How are you feeling right now? 🌟",
    "That sounds really challenging. You're not alone in this journey. 💙",
    "I appreciate you trusting me with your thoughts. What would help you most right now? 🌸",
    "Your wellbeing matters to me. Take a deep breath - you're doing great by reaching out. 🌿",
    "Every step forward, no matter how small, is worth celebrating. You're stronger than you know. 💪",
    "I'm glad you're here. Sometimes just talking about things can make a difference. 🌈"
  ];

  const scrollToBottom = () => {
    // Use a more specific scroll behavior that only scrolls within the chat container
    if (messagesEndRef.current) {
      const chatContainer = messagesEndRef.current.closest('.overflow-y-auto');
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      } else {
        // Fallback to scrollIntoView but with block: "end" to prevent footer scroll
        messagesEndRef.current.scrollIntoView({ 
          behavior: "smooth", 
          block: "end",
          inline: "nearest" 
        });
      }
    }
  };

  useEffect(() => {
    // Add a small delay to ensure DOM is updated before scrolling
    const timer = setTimeout(() => {
      scrollToBottom();
    }, 50);
    
    return () => clearTimeout(timer);
  }, [messages]);

  useEffect(() => {
    // Welcome message
    const welcomeTimeout = setTimeout(() => {
      setMessages([{
        text: "Hello! I'm your MindEase companion. I'm here to provide a safe, non-judgmental space where you can share your thoughts and feelings. How are you doing today? 🌟",
        sender: "bot",
        timestamp: new Date()
      }]);
    }, 1000);

    return () => clearTimeout(welcomeTimeout);
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;
    
    const userMessage = {
      text: input,
      sender: "user",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(() => {
      setIsTyping(false);
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      const botMessage = {
        text: randomResponse,
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1500 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 min-h-screen flex flex-col">
        {/* Enhanced Hero Section */}
        <section className="px-6 md:px-12 py-8 bg-gradient-to-r from-amber-100 to-orange-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-4 left-8 animate-float">
              <Heart className="w-8 h-8 text-pink-400" />
            </div>
            <div className="absolute top-12 right-12 animate-float-delayed">
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="absolute bottom-8 left-1/4 animate-float">
              <MessageCircle className="w-7 h-7 text-blue-400" />
            </div>
          </div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="bg-white rounded-full p-4 shadow-lg animate-pulse">
                <Bot className="w-12 h-12 text-amber-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-3 animate-fade-in">
              Chat with MindEase
            </h1>
            <p className="text-gray-700 text-lg mb-4 animate-fade-in-delayed">
              Your compassionate AI companion for mental wellness support
            </p>
            <div className="flex justify-center items-center space-x-2 text-sm text-green-700">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>AI Companion Online</span>
            </div>
          </div>
        </section>

        {/* Chat Container */}
        <div className="flex-1 flex flex-col px-4 md:px-12 py-6 max-w-6xl mx-auto w-full">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 space-y-4 border border-white/20 max-h-[60vh]">
            {messages.length === 0 && (
              <div className="text-center mt-20 animate-fade-in">
                <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-full p-8 w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <MessageCircle className="w-16 h-16 text-amber-600" />
                </div>
                <p className="text-gray-600 text-lg mb-2">Welcome to your safe space</p>
                <p className="text-gray-500">Start a conversation to begin your wellness journey 💬</p>
              </div>
            )}
            
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start space-x-3 animate-slide-in ${
                  message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                }`}
              >
                {/* Avatar */}
                <div className={`flex-shrink-0 ${
                  message.sender === "user" ? "animate-bounce-subtle" : "animate-pulse"
                }`}>
                  {message.sender === "user" ? (
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <User className="w-5 h-5 text-white" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>

                {/* Message Bubble */}
                <div className={`max-w-xs md:max-w-md lg:max-w-lg p-4 rounded-2xl shadow-md transform transition-all duration-300 hover:scale-105 ${
                  message.sender === "user"
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-tr-sm"
                    : "bg-white text-gray-800 rounded-tl-sm border border-gray-100"
                }`}>
                  <p className="text-sm md:text-base leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-2 ${
                    message.sender === "user" ? "text-amber-100" : "text-gray-500"
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-start space-x-3 animate-slide-in">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-md border border-gray-100">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Section */}
          <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-white/20">
            <div className="flex items-end space-x-4">
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Share your thoughts... I'm here to listen 💭"
                  disabled={isTyping}
                  className="w-full p-4 pr-12 rounded-xl border-2 border-gray-200 focus:border-amber-400 focus:outline-none transition-all duration-300 text-gray-700 placeholder-gray-400 bg-white/80 backdrop-blur-sm"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Zap className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isTyping}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4 rounded-xl hover:from-amber-600 hover:to-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-200"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
              <span>Press Enter to send</span>
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Secure & Confidential</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-delayed {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-delayed {
          animation: fade-in-delayed 1s ease-out;
        }
        
        .animate-slide-in {
          animation: slide-in 0.5s ease-out;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}