// src/pages/Chat.tsx
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Chat() {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>(
    []
  );
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");

    // Mock bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Thanks for sharing. I'm here to listen. 💛", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />
      <div className="bg-[#f5f0e8] min-h-screen flex flex-col">
        {/* Hero */}
        <section className="px-6 md:px-12 py-10 bg-[#fcf9f4] text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-amber-900">
            Chat with MindEase
          </h1>
          <p className="text-gray-700 mt-2">
            Your safe space to express yourself.
          </p>
        </section>

        {/* Chat Box */}
        <div className="flex-1 flex flex-col px-4 md:px-12 py-6">
          <div className="flex-1 overflow-y-auto bg-white rounded-xl shadow p-4 space-y-3">
            {messages.length === 0 && (
              <p className="text-gray-500 text-center mt-10">
                Say hello to start chatting 💬
              </p>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg max-w-xs ${
                  m.sender === "user"
                    ? "bg-amber-600 text-white self-end"
                    : "bg-gray-200 text-gray-800 self-start"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              onClick={sendMessage}
              className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
