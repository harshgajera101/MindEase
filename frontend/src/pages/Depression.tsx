import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import {
  Heart,
  Brain,
  Users,
  Moon,
  Book,
  Lightbulb,
  Zap,
  X,
  FileText,
  Activity,
  Sunrise,
  Bed,
  MessageCircle,
  Stethoscope,
  Bot,
  BookOpen,
  Headphones,
  UserCheck,
  Sun,
  Cloud,
  Star,
  Sparkles,
  //   ArrowUp,
} from "lucide-react";

export default function DepressionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //   const scrollToTop = () => {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   };

  return (
    <div className="bg-[#f5f0e8] text-gray-800 font-sans relative overflow-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-amber-300"></div>
        <div className="absolute top-60 right-20 w-20 h-20 rounded-full bg-pink-300"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 rounded-full bg-yellow-300"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-orange-300"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-yellow-50 to-orange-50 py-24 text-center overflow-hidden">
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <Heart className="absolute top-20 left-20 w-8 h-8 text-pink-300 opacity-20 animate-pulse" />
          <Star className="absolute top-32 right-32 w-6 h-6 text-yellow-400 opacity-30 animate-pulse" />
          <Sparkles className="absolute bottom-32 left-1/3 w-7 h-7 text-orange-300 opacity-25 animate-pulse" />
          <Sun className="absolute top-24 right-1/4 w-10 h-10 text-amber-300 opacity-20" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-200 to-yellow-200 rounded-full mb-8 shadow-lg">
            <Brain className="w-10 h-10 text-amber-900" />
          </div>
          <h1 className="text-5xl font-bold text-amber-900 mb-6 leading-tight">
            Understanding Depression
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mb-8">
            Depression is not just sadness—it's a serious mental health
            condition. Here you can learn more, find coping strategies, and take
            a quiz to reflect on your wellbeing.
          </p>
          <button className="group px-8 py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            <span className="flex items-center">
              <Link to="/quiz/anxiety">Take the Quiz</Link>
              <FileText className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
            </span>
          </button>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="py-20 px-6 md:px-24 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-200 to-yellow-200 rounded-full mb-6">
              <Lightbulb className="w-8 h-8 text-amber-900" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-amber-900">
              Understanding Depression
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-yellow-300 mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="group bg-[#fcf9f4] rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="font-bold text-xl text-amber-900">
                  What is Depression?
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                A condition that affects mood, thoughts, and overall
                functioning. Symptoms include persistent sadness, loss of
                interest, fatigue, and feelings of hopelessness.
              </p>
            </div>

            <div className="group bg-[#fcf9f4] rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-200 to-purple-300 rounded-2xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-purple-700" />
                </div>
                <h3 className="font-bold text-xl text-amber-900">
                  How Does it Happen?
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Depression can be triggered by genetic factors, brain chemistry,
                trauma, chronic stress, or major life events. It's not a
                weakness, but a health condition.
              </p>
            </div>

            <div className="group bg-[#fcf9f4] rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-200 to-pink-300 rounded-2xl flex items-center justify-center mr-4">
                  <X className="w-6 h-6 text-red-700" />
                </div>
                <h3 className="font-bold text-xl text-amber-900">
                  Myths vs Facts
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-red-600">Myth:</span>{" "}
                Depression means being weak. <br />
                <span className="font-semibold text-green-600">Fact:</span>{" "}
                Depression is a medical condition that requires care and
                support, just like physical health issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coping Strategies */}
      <section className="py-20 px-6 md:px-24 bg-gradient-to-br from-[#fcf9f4] via-pink-50 to-yellow-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full mb-6">
              <Heart className="w-8 h-8 text-green-700" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-amber-900">
              Coping Strategies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-300 to-emerald-300 mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <FileText className="w-8 h-8 text-blue-600" />,
                title: "Journaling",
                desc: "Write down thoughts to process emotions and reduce overthinking.",
                bgColor: "from-blue-100 to-blue-200",
              },
              {
                icon: <Activity className="w-8 h-8 text-green-600" />,
                title: "Exercise",
                desc: "Daily movement improves mood by releasing endorphins.",
                bgColor: "from-green-100 to-green-200",
              },
              {
                icon: <Sunrise className="w-8 h-8 text-orange-600" />,
                title: "Mindfulness",
                desc: "Short meditation or breathing exercises help calm the mind.",
                bgColor: "from-orange-100 to-orange-200",
              },
              {
                icon: <Bed className="w-8 h-8 text-purple-600" />,
                title: "Sleep Routine",
                desc: "Consistent rest helps regulate mood and energy.",
                bgColor: "from-purple-100 to-purple-200",
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-pink-600" />,
                title: "Talk to Someone",
                desc: "Sharing with a friend, family, or therapist reduces isolation.",
                bgColor: "from-pink-100 to-pink-200",
              },
              {
                icon: <Stethoscope className="w-8 h-8 text-indigo-600" />,
                title: "Therapy",
                desc: "CBT and counseling provide professional guidance for recovery.",
                bgColor: "from-indigo-100 to-indigo-200",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-8 bg-[#fcf9f4] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-100"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Holistic Wellbeing */}
      <section className="py-20 px-6 md:px-24 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full mb-6">
              <Star className="w-8 h-8 text-orange-700" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-amber-900">
              5 Pillars of Holistic Wellbeing
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-orange-300 mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                icon: <Brain className="w-10 h-10 text-pink-600" />,
                title: "Mind",
                desc: "Try meditation and CBT-based exercises.",
                bgColor: "from-pink-100 to-pink-200",
              },
              {
                icon: <Moon className="w-10 h-10 text-indigo-600" />,
                title: "Body",
                desc: "Focus on nutrition, sleep, and exercise.",
                bgColor: "from-indigo-100 to-indigo-200",
              },
              {
                icon: <Heart className="w-10 h-10 text-red-600" />,
                title: "Emotions",
                desc: "Journal feelings and practice self-kindness.",
                bgColor: "from-red-100 to-red-200",
              },
              {
                icon: <Users className="w-10 h-10 text-green-600" />,
                title: "Social",
                desc: "Connect with family and trusted peers.",
                bgColor: "from-green-100 to-green-200",
              },
              {
                icon: <Book className="w-10 h-10 text-purple-600" />,
                title: "Spiritual",
                desc: "Explore gratitude and mindfulness rituals.",
                bgColor: "from-purple-100 to-purple-200",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-8 bg-[#fcf9f4] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-amber-100"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200`}
                >
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-4 text-amber-900">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-20 px-6 md:px-24 text-center bg-[#f5f0e8] relative">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <Cloud className="absolute top-20 left-1/4 w-16 h-16 text-blue-300" />
          <Star className="absolute bottom-20 right-1/4 w-12 h-12 text-yellow-400" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full mb-8">
            <FileText className="w-10 h-10 text-blue-700" />
          </div>
          <h2 className="text-4xl font-bold mb-6 text-amber-900">
            Take the Depression Self-Check Quiz
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-700 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Answer a few simple questions to better understand your mental
            health. This is not a diagnosis but a self-reflection tool.
          </p>
          <button className="group px-10 py-5 bg-gradient-to-r from-blue-400 to-purple-500 text-white text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
            <span className="flex items-center">
              <Link to="/quiz/anxiety">Start Quiz</Link>
              <Sparkles className="ml-3 w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
            </span>
          </button>
        </div>
      </section>

      {/* What's Next */}
      <section className="py-20 px-6 md:px-24 bg-gradient-to-br from-[#fcf9f4] via-amber-50 to-yellow-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-200 to-yellow-200 rounded-full mb-6">
              <Sparkles className="w-8 h-8 text-amber-700" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-amber-900">
              What's Next?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-yellow-300 mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Bot className="w-8 h-8 text-blue-600" />,
                title: "Chat with our Bot",
                link: "/chat",
                bgColor: "from-blue-100 to-blue-200",
              },
              {
                icon: <BookOpen className="w-8 h-8 text-green-600" />,
                title: "Read Helpful Blogs",
                link: "/blog",
                bgColor: "from-green-100 to-green-200",
              },
              {
                icon: <Headphones className="w-8 h-8 text-purple-600" />,
                title: "Relaxation Exercises",
                link: "/relaxation",
                bgColor: "from-purple-100 to-purple-200",
              },
              {
                icon: <UserCheck className="w-8 h-8 text-orange-600" />,
                title: "Seek Professional Help",
                link: "/support",
                bgColor: "from-orange-100 to-orange-200",
              },
            ].map((item) => (
              <a
                href={item.link}
                key={item.title}
                className="group p-8 bg-[#fcf9f4] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-amber-100"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200`}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-amber-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
                  Click to explore
                </p>
              </a>
            ))}
          </div>
        </div>
        {/* Bottom */}
        <BackToTop />
        {/* <div className="text-center py-4 border-gray-300">
          <button
            onClick={scrollToTop}
            className="mt-6 flex items-center justify-center mx-auto px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <ArrowUp size={18} className="mr-2" /> Back to Top
          </button>
        </div> */}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
