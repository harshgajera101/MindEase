// src/pages/Home.tsx
import { useState } from "react";
import Navbar from "../components/Navbar";

const faqs = [
  { q: "Do I need to create an account?", a: "No, MindEase works instantly without requiring you to sign up or log in." },
  { q: "Is my chat private?", a: "Yes, your conversations are private and not stored permanently." },
  { q: "Can I access it on mobile?", a: "Absolutely! MindEase is mobile-friendly and works on any device." },
  { q: "Is it a replacement for therapy?", a: "No, MindEase is a supportive tool but not a substitute for professional help." }
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="bg-[#f5f0e8] text-gray-800 font-sans">
      {/* Navbar */}
      <Navbar/>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center gap-4 py-4 bg-white shadow-md md:hidden">
          <a href="">Home</a>
          <a href="about">About</a>
          <a href="chat">Chat</a>
          <a href="blog">Blog</a>
          <a href="support">Support</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-12 py-12 md:py-20 gap-10">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4206/4206277.png"
          alt="Chat Support"
          className="w-3/4 md:w-full max-w-sm mx-auto"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-amber-900 mb-4">
            Your AI Companion for Mental Well-being
          </h2>
          <p className="mb-6 text-base md:text-lg text-gray-700">
            MindEase helps you manage stress, anxiety, and depression with instant AI-powered support anytime, anywhere.
          </p>
          <a
            href="/chat"
            className="bg-amber-600 text-white px-6 py-3 rounded-full font-medium hover:bg-amber-700 transition inline-block"
          >
            Start Chatting
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 md:px-12 py-12 md:py-20 bg-[#fcf9f4]">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-amber-900 mb-10">
          Why Choose MindEase?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              img: "https://cdn-icons-png.flaticon.com/512/1048/1048946.png",
              title: "No Login Needed",
              desc: "Get support instantly without creating an account."
            },
            {
              img: "https://cdn-icons-png.flaticon.com/512/4359/4359963.png",
              title: "24/7 Availability",
              desc: "Access support anytime, day or night."
            },
            {
              img: "https://cdn-icons-png.flaticon.com/512/599/599995.png",
              title: "Safe & Private",
              desc: "Your conversations remain confidential and secure."
            }
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition text-center"
            >
              <img
                src={f.img}
                alt={f.title}
                className="w-20 h-20 mx-auto mb-4 rounded-full"
              />
              <h4 className="text-lg md:text-xl font-semibold text-amber-800">{f.title}</h4>
              <p className="text-gray-600 mt-2 text-sm md:text-base">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="px-6 md:px-12 py-12 md:py-20">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-amber-900 mb-10">
          How It Works
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { step: "1", title: "Visit MindEase", desc: "Open the website on your phone or desktop." },
            { step: "2", title: "Start Chat", desc: "Click on 'Start Chatting' to begin your conversation." },
            { step: "3", title: "Get Support", desc: "Receive instant, AI-powered responses and guidance." }
          ].map((h, i) => (
            <div
              key={i}
              className="bg-[#fcf9f4] rounded-xl p-6 shadow hover:shadow-md transition"
            >
              <div className="text-2xl md:text-3xl font-bold text-amber-700 mb-3">{h.step}</div>
              <h4 className="text-lg md:text-xl font-semibold text-amber-800">{h.title}</h4>
              <p className="text-gray-600 mt-2 text-sm md:text-base">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 md:px-12 py-12 md:py-20 bg-[#fcf9f4]">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-amber-900 mb-10">
          Frequently Asked Questions
        </h3>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-4 cursor-pointer"
              onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-base md:text-lg">{f.q}</h4>
                <span className="text-xl">{openFAQ === i ? "-" : "+"}</span>
              </div>
              {openFAQ === i && (
                <p className="text-gray-600 mt-2 text-sm md:text-base">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-800 text-white py-8 px-6 text-center">
        <p className="mb-4 text-sm md:text-base">© 2025 MindEase. All Rights Reserved.</p>
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <a href="#" className="hover:text-amber-300">Facebook</a>
          <a href="#" className="hover:text-amber-300">Twitter</a>
          <a href="#" className="hover:text-amber-300">Instagram</a>
          <a href="#" className="hover:text-amber-300">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
