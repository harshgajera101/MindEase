import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logo from "../assets/img/logo.png";
import Logo1 from "../assets/img/logo1.png";
import {
  Heart,
  Brain,
  Moon,
  Shield,
  Clock,
  MessageCircle,
  Sparkles,
  Star,
  Wind,
  Activity,
  Eye,
  Globe,
  Lightbulb,
  ChevronDown,
  ChevronRight,
  Play,
  Headphones,
  FileText,
  UserCheck,
  Waves,
  Compass,
  ArrowUp,
} from "lucide-react";

const faqs = [
  {
    q: "Is my chat private and secure?",
    a: "Yes, your conversations are private and encrypted. We prioritize your confidentiality and data security.",
  },
  {
    q: "Can I access it on mobile devices?",
    a: "Absolutely! MindEase is fully responsive and works seamlessly on phones, tablets, and desktops.",
  },
  {
    q: "Is it a replacement for professional therapy?",
    a: "No, MindEase is a supportive tool but not a substitute for professional mental health care. We encourage seeking professional help when needed.",
  },
  {
    q: "What kind of support can I expect?",
    a: "Our AI provides emotional support, coping strategies, mindfulness exercises, and resources for mental wellness.",
  },
  {
    q: "How accurate is the mental health information?",
    a: "Our content is based on evidence-based practices and reviewed by mental health professionals, but always consult healthcare providers for clinical advice.",
  },
];

export default function Home() {
  const [isOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#f5f0e8] text-gray-800 font-sans relative overflow-hidden">
      {/* Background decorations */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-amber-300 animate-pulse"></div>
        <div className="absolute top-60 right-20 w-20 h-20 rounded-full bg-pink-300 animate-pulse"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 rounded-full bg-green-300 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-blue-300 animate-pulse"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 py-20 overflow-hidden">
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <Heart className="absolute top-32 left-20 w-8 h-8 text-pink-300 opacity-30 animate-pulse" />
          <Star className="absolute top-20 right-32 w-6 h-6 text-yellow-400 opacity-40 animate-pulse" />
          <Brain className="absolute bottom-32 left-1/3 w-10 h-10 text-blue-300 opacity-25 animate-pulse" />
          <Sparkles className="absolute top-1/2 right-1/4 w-7 h-7 text-purple-300 opacity-35 animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative z-10">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center bg-amber-100 px-4 py-2 rounded-full text-amber-800 font-medium">
              <Heart className="w-4 h-4 mr-2" />
              Mental Wellness Made Simple
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-amber-900 leading-tight">
              Your AI Companion for
              <span className="block text-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Mental Well-being
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
              MindEase provides instant AI-powered support for stress, anxiety,
              and depression. Get personalized guidance, coping strategies, and
              emotional support anytime, anywhere.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/chat"
                className="group bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Start Your Journey
              </a>
              <a
                href="#how"
                className="group bg-white text-amber-800 px-8 py-4 rounded-2xl font-semibold border-2 border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all duration-200 flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Learn How It Works
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-1 text-green-500" />
                100% Private
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1 text-blue-500" />
                24/7 Available
              </div>
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-1 text-pink-500" />
                Evidence-Based
              </div>
            </div>
          </div>

          {/* Hero Image/Graphics */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main illustration container */}
              <div className="bg-gradient-to-br from-amber-100 via-pink-50 to-blue-100 rounded-3xl p-12 shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Brain className="w-16 h-16 text-purple-700" />
                    {/* <img src={Logo1} alt="" className="w-26 h-26"/> */}
                    {/* from-pink-200 to-purple-20 from-[#fdf6ec] to-[#f9f7f3] */}
                  </div>

                  {/* Floating mini cards */}
                  <div className="relative">
                    <div className="absolute -top-8 -left-8 bg-white p-3 rounded-xl shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-200">
                      <Heart className="w-6 h-6 text-pink-500" />
                    </div>
                    <div className="absolute -top-4 -right-12 bg-white p-3 rounded-xl shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-200">
                      <Moon className="w-6 h-6 text-indigo-500" />
                    </div>
                    <div className="absolute -bottom-6 -left-4 bg-white p-3 rounded-xl shadow-lg transform rotate-45 hover:rotate-0 transition-transform duration-200">
                      <Sparkles className="w-6 h-6 text-yellow-500" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800">
                      AI-Powered Support
                    </h3>
                    <p className="text-gray-600">
                      Instant guidance when you need it most
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-pink-300 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="px-6 md:px-12 py-20 bg-gradient-to-br from-[#fcf9f4] via-amber-50 to-pink-50 relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-200 to-yellow-200 rounded-full mb-6">
              <Star className="w-8 h-8 text-amber-700" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Why Choose MindEase?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-yellow-300 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover the features that make MindEase your trusted companion
              for mental wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-10 h-10 text-blue-600" />,
                title: "24/7 Availability",
                desc: "Access mental health support anytime, day or night. No waiting rooms, no appointments needed.",
                bgColor: "from-blue-100 to-blue-200",
              },
              {
                icon: <Shield className="w-10 h-10 text-green-600" />,
                title: "Private & Secure",
                desc: "Your conversations are encrypted and confidential. Your mental health journey stays private.",
                bgColor: "from-green-100 to-green-200",
              },
              {
                icon: <Brain className="w-10 h-10 text-purple-600" />,
                title: "AI-Powered Intelligence",
                desc: "Advanced AI trained on evidence-based mental health practices and therapeutic techniques.",
                bgColor: "from-purple-100 to-purple-200",
              },
              {
                icon: <Heart className="w-10 h-10 text-pink-600" />,
                title: "Personalized Support",
                desc: "Tailored responses based on your unique needs and emotional state.",
                bgColor: "from-pink-100 to-pink-200",
              },
              {
                icon: <Globe className="w-10 h-10 text-cyan-600" />,
                title: "Accessible Anywhere",
                desc: "Works on any device - phone, tablet, or computer. Mental health support in your pocket.",
                bgColor: "from-cyan-100 to-cyan-200",
              },
              {
                icon: <FileText className="w-10 h-10 text-orange-600" />,
                title: "Evidence-Based",
                desc: "Built on scientifically-backed therapeutic approaches and mental health best practices.",
                bgColor: "from-orange-100 to-orange-200",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-100"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="px-6 md:px-12 py-20 bg-[#f5f0e8] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full mb-6">
              <Compass className="w-8 h-8 text-blue-700" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Getting started with MindEase is simple and takes less than a
              minute
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                icon: <Globe className="w-8 h-8 text-blue-600" />,
                title: "Visit MindEase",
                desc: "Open our website on any device - phone, tablet, or computer. No downloads required.",
                color: "blue",
              },
              {
                step: "2",
                icon: <MessageCircle className="w-8 h-8 text-green-600" />,
                title: "Start Conversation",
                desc: "Click 'Start Your Journey' and begin chatting with our AI companion instantly.",
                color: "green",
              },
              {
                step: "3",
                icon: <Heart className="w-8 h-8 text-pink-600" />,
                title: "Get Support",
                desc: "Receive personalized guidance, coping strategies, and emotional support tailored to you.",
                color: "pink",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br from-${step.color}-400 to-${step.color}-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                  >
                    {step.step}
                  </div>
                </div>

                <div
                  className={`w-16 h-16 bg-gradient-to-br from-${step.color}-100 to-${step.color}-200 rounded-2xl flex items-center justify-center mx-auto mt-6 mb-6 group-hover:scale-110 transition-transform duration-200`}
                >
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold text-amber-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{step.desc}</p>

                {/* {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-amber-300" />
                  </div>
                )} */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mental Health Awareness Preview */}
      <section className="px-6 md:px-12 py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full mb-6">
              <Lightbulb className="w-8 h-8 text-pink-700" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Mental Health Awareness
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-purple-300 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Learn about common mental health conditions and discover coping
              strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Depression Card */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center mr-4">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-amber-900">
                    Understanding Depression
                  </h3>
                  <p className="text-gray-600">
                    Learn about symptoms and coping strategies
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Depression affects millions worldwide. Discover what it is, how
                it happens, and effective ways to manage and overcome it with
                professional support and self-care strategies.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Self-assessment tools
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Coping strategies and techniques
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Professional resources
                </div>
              </div>

              <a
                href="/depression"
                className="group inline-flex items-center bg-gradient-to-r from-pink-400 to-pink-500 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-200"
              >
                Explore Depression Resources
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>

            {/* Anxiety Card */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mr-4">
                  <Wind className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-amber-900">
                    Managing Anxiety
                  </h3>
                  <p className="text-gray-600">
                    Understand anxiety and find relief
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Anxiety can be overwhelming, but it's manageable. Learn about
                different types of anxiety, triggers, and evidence-based
                techniques to calm your mind and regain control.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Breathing and grounding exercises
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Anxiety management techniques
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Support resources
                </div>
              </div>

              <a
                href="/anxiety"
                className="group inline-flex items-center bg-gradient-to-r from-blue-400 to-blue-500 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-200"
              >
                Explore Anxiety Resources
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Relaxation Preview */}
      <section className="px-6 md:px-12 py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-200 to-blue-200 rounded-full mb-6">
              <Waves className="w-8 h-8 text-green-700" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Quick Relaxation Exercises
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-300 to-blue-300 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Instant relief techniques you can use anywhere, anytime
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Wind className="w-8 h-8 text-cyan-600" />,
                title: "Breathing Exercises",
                desc: "Simple breathing techniques to calm anxiety and reduce stress instantly.",
                duration: "2-5 minutes",
                bgColor: "from-cyan-100 to-cyan-200",
              },
              {
                icon: <Eye className="w-8 h-8 text-purple-600" />,
                title: "Guided Meditation",
                desc: "Short mindfulness sessions to center your thoughts and find peace.",
                duration: "5-10 minutes",
                bgColor: "from-purple-100 to-purple-200",
              },
              {
                icon: <Activity className="w-8 h-8 text-green-600" />,
                title: "Progressive Relaxation",
                desc: "Step-by-step muscle relaxation to release physical tension.",
                duration: "10-15 minutes",
                bgColor: "from-green-100 to-green-200",
              },
            ].map((exercise, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${exercise.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200`}
                >
                  {exercise.icon}
                </div>

                <h3 className="text-xl font-bold text-amber-900 mb-3">
                  {exercise.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {exercise.desc}
                </p>

                <div className="inline-flex items-center bg-amber-100 px-3 py-1 rounded-full text-amber-800 text-sm font-medium mb-6">
                  <Clock className="w-3 h-3 mr-1" />
                  {exercise.duration}
                </div>

                <button className="group w-full bg-gradient-to-r from-amber-400 to-amber-500 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center">
                  <Play className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Try Now
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/relaxation"
              className="group inline-flex items-center bg-white text-amber-800 px-8 py-4 rounded-2xl font-semibold border-2 border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all duration-200"
            >
              <Headphones className="w-5 h-5 mr-2" />
              View All Relaxation Exercises
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="px-6 md:px-12 py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full mb-6">
              <MessageCircle className="w-8 h-8 text-blue-700" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-700">
              Everything you need to know about MindEase
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl"
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                >
                  <h3 className="font-semibold text-lg text-amber-900 pr-4">
                    {faq.q}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === i ? (
                      <ChevronDown className="w-6 h-6 text-amber-600 transform rotate-180 transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-amber-600 transition-transform duration-200" />
                    )}
                  </div>
                </button>
                {openFAQ === i && (
                  <div className="px-6 pb-6">
                    <div className="border-t pt-4">
                      <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-20 bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Heart className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Take the first step towards better mental health. Your wellbeing
              matters, and help is just a click away.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/chat"
              className="group bg-white text-amber-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Start Your Journey Now
            </a>
            <a
              href="/support"
              className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-amber-600 transition-all duration-200 flex items-center justify-center"
            >
              <UserCheck className="w-5 h-5 mr-2" />
              Find Professional Help
            </a>
          </div>

          <p className="mt-8 text-sm opacity-75">
            Available 24/7 • Completely Private • No Registration Required
          </p>
          {/* Back to Top */}
          <div className="text-center py-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center bg-amber-50 space-x-2 px-6 py-3 border border-amber-200 text-amber-700 rounded-full hover:bg-amber-50 hover:border-amber-400 transition-all duration-200 shadow-sm hover:shadow-lg"
            >
              <ArrowUp size={18} />
              <span className="font-medium">Back to Top</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
