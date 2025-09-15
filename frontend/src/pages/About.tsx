// src/pages/About.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <div className="bg-[#f5f0e8] min-h-screen text-gray-800">
        {/* Hero */}
        <section className="px-6 md:px-12 py-16 bg-[#fcf9f4] text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-amber-900 mb-4">
            About MindEase
          </h1>
          <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
            MindEase is designed to support mental well-being by providing a
            safe, AI-powered companion you can talk to anytime, without
            judgment.
          </p>
        </section>

        {/* Content */}
        <section className="px-6 md:px-16 py-16 space-y-10 max-w-5xl mx-auto">
          <div>
            <h2 className="text-2xl font-semibold text-amber-800 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-700">
              We aim to make mental health support accessible to everyone,
              anytime, anywhere. MindEase is not a replacement for therapy but a
              companion to ease your journey.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-800 mb-3">
              Our Values
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Accessibility without barriers</li>
              <li>Privacy and confidentiality</li>
              <li>Empathy and compassion</li>
              <li>24/7 reliable support</li>
            </ul>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}
