// src/pages/Support.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Support() {
  return (
    <>
      <Navbar />
      <div className="bg-[#f5f0e8] min-h-screen text-gray-800">
        {/* Hero */}
        <section className="px-6 md:px-12 py-16 bg-[#fcf9f4] text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-amber-900">
            Support & Help
          </h1>
          <p className="text-gray-700 text-base md:text-lg mt-2">
            We’re here to help you anytime you need guidance or resources.
          </p>
        </section>

        {/* Contact Options */}
        <section className="px-6 md:px-16 py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h3 className="text-xl font-semibold text-amber-800 mb-2">FAQs</h3>
            <p className="text-gray-600 mb-4">
              Find quick answers to the most common questions.
            </p>
            <a href="#faq" className="text-amber-600 hover:underline">
              View FAQs
            </a>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h3 className="text-xl font-semibold text-amber-800 mb-2">
              Email Us
            </h3>
            <p className="text-gray-600 mb-4">
              For any inquiries, feel free to reach out via email.
            </p>
            <a
              href="mailto:support@mindease.com"
              className="text-amber-600 hover:underline"
            >
              support@mindease.com
            </a>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h3 className="text-xl font-semibold text-amber-800 mb-2">
              Emergency Help
            </h3>
            <p className="text-gray-600 mb-4">
              If you’re in crisis, please reach out to a professional
              immediately.
            </p>
            <a href="tel:112" className="text-amber-600 hover:underline">
              Call 112
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
