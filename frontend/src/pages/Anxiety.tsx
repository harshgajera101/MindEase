import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { 
  Heart, 
  Brain, 
  Users, 
  Moon, 
  Book, 
  Wind, 
  Coffee, 
  Eye,
  Lightbulb,
  Zap,
  X,
  FileText,
//   Activity,
//   Sunrise,
//   Bed,
//   MessageCircle,
//   Stethoscope,
  Bot,
  BookOpen,
  Headphones,
  UserCheck,
//   Sun,
  Cloud,
  Star,
  Sparkles,
  Waves,
  Shield
} from "lucide-react";

export default function Anxiety() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f5f0e8] text-gray-800 font-sans relative overflow-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-300"></div>
        <div className="absolute top-60 right-20 w-20 h-20 rounded-full bg-green-300"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 rounded-full bg-cyan-300"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-teal-300"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-green-50 to-cyan-50 py-24 text-center overflow-hidden">
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <Wind className="absolute top-20 left-20 w-8 h-8 text-blue-300 opacity-20 animate-pulse" />
          <Waves className="absolute top-32 right-32 w-6 h-6 text-cyan-400 opacity-30 animate-pulse" />
          <Shield className="absolute bottom-32 left-1/3 w-7 h-7 text-green-300 opacity-25 animate-pulse" />
          <Cloud className="absolute top-24 right-1/4 w-10 h-10 text-blue-300 opacity-20" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-200 to-green-200 rounded-full mb-8 shadow-lg">
            <Brain className="w-10 h-10 text-blue-800" />
          </div>
          <h1 className="text-5xl font-bold text-blue-900 mb-6 leading-tight">
            Understanding Anxiety
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mb-8">
            Anxiety is more than feeling nervous—it's a common mental health
            condition that can interfere with daily life. Here, you can learn what
            anxiety is, discover coping strategies, and take a quiz to reflect on
            your wellbeing.
          </p>
          <button className="group px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            <span className="flex items-center">
              Take the Quiz
              <FileText className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
            </span>
          </button>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="py-20 px-6 md:px-24 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full mb-6">
              <Lightbulb className="w-8 h-8 text-blue-800" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-blue-900">
              Understanding Anxiety
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-green-300 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="group bg-[#fcf9f4] rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="font-bold text-xl text-blue-900">What is Anxiety?</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Anxiety involves excessive worry, fear, or nervousness. While
                occasional stress is normal, anxiety disorders can cause
                overwhelming distress, racing thoughts, and physical symptoms like
                sweating or rapid heartbeat.
              </p>
            </div>
            
            <div className="group bg-[#fcf9f4] rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-200 to-green-300 rounded-2xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="font-bold text-xl text-blue-900">How Does it Happen?</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Anxiety can develop from stressful life events, genetics,
                overactive brain responses, or long-term exposure to uncertainty
                and pressure. It often coexists with other mental health
                challenges.
              </p>
            </div>
            
            <div className="group bg-[#fcf9f4] rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-200 to-pink-300 rounded-2xl flex items-center justify-center mr-4">
                  <X className="w-6 h-6 text-red-700" />
                </div>
                <h3 className="font-bold text-xl text-blue-900">Myths vs Facts</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-red-600">Myth:</span> Anxiety means someone is weak. <br />
                <span className="font-semibold text-green-600">Fact:</span> Anxiety is a medical condition influenced by biology,
                environment, and lifestyle. With the right tools, it is
                manageable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coping Strategies */}
      <section className="py-20 px-6 md:px-24 bg-gradient-to-br from-[#fcf9f4] via-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full mb-6">
              <Shield className="w-8 h-8 text-green-700" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-blue-900">
              Coping Strategies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-300 to-emerald-300 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Wind className="w-8 h-8 text-cyan-600" />,
                title: "Deep Breathing",
                desc: "Slow, deep breaths reduce physical symptoms like a racing heart.",
                bgColor: "from-cyan-100 to-cyan-200"
              },
              {
                icon: <Brain className="w-8 h-8 text-blue-600" />,
                title: "Meditation",
                desc: "Mindfulness helps anchor your thoughts and reduce worry spirals.",
                bgColor: "from-blue-100 to-blue-200"
              },
              {
                icon: <Coffee className="w-8 h-8 text-orange-600" />,
                title: "Reduce Caffeine",
                desc: "Too much caffeine can intensify anxiety symptoms and restlessness.",
                bgColor: "from-orange-100 to-orange-200"
              },
              {
                icon: <Moon className="w-8 h-8 text-indigo-600" />,
                title: "Rest Well",
                desc: "Good sleep hygiene calms the nervous system and restores energy.",
                bgColor: "from-indigo-100 to-indigo-200"
              },
              {
                icon: <Eye className="w-8 h-8 text-green-600" />,
                title: "Grounding Exercises",
                desc: "Focus on 5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste.",
                bgColor: "from-green-100 to-green-200"
              },
              {
                icon: <Users className="w-8 h-8 text-purple-600" />,
                title: "Talk to Someone",
                desc: "Reach out to a friend, counselor, or therapist for support.",
                bgColor: "from-purple-100 to-purple-200"
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-8 bg-[#fcf9f4] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Holistic Wellbeing */}
      <section className="py-20 px-6 md:px-24 bg-gradient-to-br from-green-50 via-cyan-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full mb-6">
              <Star className="w-8 h-8 text-blue-700" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-blue-900">
              5 Pillars of Holistic Wellbeing
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-300 to-blue-300 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {[
              { 
                icon: <Brain className="w-10 h-10 text-blue-600" />, 
                title: "Mind", 
                desc: "Practice mindfulness and challenge anxious thoughts.",
                bgColor: "from-blue-100 to-blue-200"
              },
              { 
                icon: <Moon className="w-10 h-10 text-indigo-600" />, 
                title: "Body", 
                desc: "Exercise, hydrate well, and maintain balanced nutrition.",
                bgColor: "from-indigo-100 to-indigo-200"
              },
              { 
                icon: <Heart className="w-10 h-10 text-red-600" />, 
                title: "Emotions", 
                desc: "Identify triggers and write about feelings to process them.",
                bgColor: "from-red-100 to-red-200"
              },
              { 
                icon: <Users className="w-10 h-10 text-green-600" />, 
                title: "Social", 
                desc: "Stay connected with supportive people and groups.",
                bgColor: "from-green-100 to-green-200"
              },
              { 
                icon: <Book className="w-10 h-10 text-purple-600" />, 
                title: "Spiritual", 
                desc: "Cultivate gratitude, faith, or mindfulness practices.",
                bgColor: "from-purple-100 to-purple-200"
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-8 bg-[#fcf9f4] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-blue-100"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-4 text-blue-900">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-20 px-6 md:px-24 text-center bg-[#f5f0e8] relative">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <Cloud className="absolute top-20 left-1/4 w-16 h-16 text-blue-300" />
          <Waves className="absolute bottom-20 right-1/4 w-12 h-12 text-cyan-400" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full mb-8">
            <FileText className="w-10 h-10 text-blue-700" />
          </div>
          <h2 className="text-4xl font-bold mb-6 text-blue-900">
            Take the Anxiety Self-Check Quiz
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-300 to-blue-300 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-700 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            A quick set of questions to help you reflect on your anxiety levels.
            This is not a diagnosis but a tool to build awareness and seek help if
            needed.
          </p>
          <button className="group px-10 py-5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
            <span className="flex items-center">
              Start Quiz
              <Sparkles className="ml-3 w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
            </span>
          </button>
        </div>
      </section>

      {/* What's Next */}
      <section className="py-20 px-6 md:px-24 bg-gradient-to-br from-[#fcf9f4] via-blue-50 to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full mb-6">
              <Sparkles className="w-8 h-8 text-blue-700" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-blue-900">What's Next?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-cyan-300 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { 
                icon: <Bot className="w-8 h-8 text-blue-600" />,
                title: "Chat with our Bot", 
                link: "/chat",
                bgColor: "from-blue-100 to-blue-200"
              },
              { 
                icon: <BookOpen className="w-8 h-8 text-green-600" />,
                title: "Read Helpful Blogs", 
                link: "/blog",
                bgColor: "from-green-100 to-green-200"
              },
              { 
                icon: <Headphones className="w-8 h-8 text-purple-600" />,
                title: "Relaxation Exercises", 
                link: "/relaxation",
                bgColor: "from-purple-100 to-purple-200"
              },
              { 
                icon: <UserCheck className="w-8 h-8 text-cyan-600" />,
                title: "Seek Professional Help", 
                link: "/support",
                bgColor: "from-cyan-100 to-cyan-200"
              },
            ].map((item) => (
              <a
                href={item.link}
                key={item.title}
                className="group p-8 bg-[#fcf9f4] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-blue-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-200">Click to explore</p>
              </a>
            ))}
          </div>
        </div>
        {/* Bottom */}
      <BackToTop/>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}