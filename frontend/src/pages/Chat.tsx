// ./pages/Chat.tsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useRef, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { Send, Bot, User } from "lucide-react";

// --- TypeScript Interfaces ---
interface InitialChatData {
  session_id: string;
  bot_responses: string[];
}

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

export default function Chat() {
  const location = useLocation();
  const initialChatData = location.state?.chatData as InitialChatData | undefined;

  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isSessionOver, setIsSessionOver] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };
  useEffect(scrollToBottom, [messages, isTyping]);

  useEffect(() => {
    if (initialChatData) {
      setSessionId(initialChatData.session_id);
      setIsTyping(true);
      
      const timers: number[] = [];
      let delay = 500;
      
      initialChatData.bot_responses.forEach((res, index) => {
        const timerId = setTimeout(() => {
          setMessages(prev => [...prev, { text: res, sender: 'bot' }]);
          if (index === initialChatData.bot_responses.length - 1) {
            setIsTyping(false);
          }
        }, delay);
        timers.push(timerId);
        delay += 1200;
      });

      return () => {
        timers.forEach(timerId => clearTimeout(timerId));
      };
    }
  }, [initialChatData]);

  // --- FIXED: The sendMessage function with refined timing logic ---
  const sendMessage = async () => {
    if (!input.trim() || !sessionId || isTyping) return;
    
    const userInput = input.trim();
    
    // Add user message to the state immediately
    setMessages(prev => [...prev, { text: userInput, sender: 'user' }]);
    
    // Clear the input field immediately
    setInput("");

    // Start typing animation
    setIsTyping(true);

    try {
      const response = await fetch('http://127.0.0.1:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId, message: userInput }),
      });
      const data = await response.json();

      if (data.bot_responses && data.bot_responses.length > 0) {
        let delay = 500;
        data.bot_responses.forEach((res: string, index: number) => {
          setTimeout(() => {
            setMessages(prev => [...prev, { text: res, sender: 'bot' }]);
            
            // Only stop typing and check for session end after the last message is added
            if (index === data.bot_responses.length - 1) {
              setIsTyping(false);
              if (res.toLowerCase().includes("goodbye") || res.toLowerCase().includes("take care!")) {
                setIsSessionOver(true);
              }
            }
          }, delay);
          delay += 1200;
        });
      } else {
        // If no bot responses, simply stop typing
        setIsTyping(false);
      }
    } catch (error) {
      console.error("Error communicating with chat API:", error);
      setMessages(prev => [...prev, { text: "Sorry, I'm having trouble connecting. Please try again later.", sender: 'bot' }]);
      setIsTyping(false); // Stop typing on error
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!initialChatData) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 min-h-screen flex flex-col">
        <section className="px-6 md:px-12 py-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-3">Your Guided Session</h1>
            <p className="text-gray-700 text-lg">Here are a few small tasks based on your quiz results.</p>
        </section>
        <div className="flex-1 flex flex-col px-4 md:px-12 py-6 max-w-4xl mx-auto w-full">
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 space-y-4 border border-white/20 max-h-[65vh]">
            {messages.map((message, index) => (
                <div key={index} className={`flex items-start space-x-3 ${message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}>
                  <div className="flex-shrink-0">
                    {message.sender === "user" ? (
                      <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg"><User className="w-5 h-5 text-white" /></div>
                    ) : (
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"><Bot className="w-5 h-5 text-white" /></div>
                    )}
                  </div>
                  <div className={`max-w-md p-4 rounded-2xl shadow-md ${message.sender === "user" ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-tr-sm" : "bg-white text-gray-800 rounded-tl-sm border"}`}>
                    <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">{message.text}</p>
                  </div>
                </div>
              ))}
            {isTyping && (
              <div className="flex items-start space-x-3">
                 <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"><Bot className="w-5 h-5 text-white" /></div>
                 <div className="bg-white p-4 rounded-2xl shadow-md border"><div className="flex space-x-1"><div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div><div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.1s]"></div><div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div></div></div>
              </div>
            )}
          </div>
          <div className="mt-6">
             <div className="flex items-end space-x-4">
               <div className="flex-1 relative">
                 <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={handleKeyPress} placeholder={isSessionOver ? "Session is complete. Thank you!" : "Type your response..."} disabled={isTyping || isSessionOver} className="w-full p-4 pr-12 rounded-xl border-2 focus:border-amber-400 focus:outline-none transition" />
               </div>
               <button onClick={sendMessage} disabled={!input.trim() || isTyping || isSessionOver} className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4 rounded-xl hover:from-amber-600 hover:to-orange-600 disabled:opacity-50 transition shadow-lg">
                 <Send className="w-5 h-5" />
               </button>
             </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}