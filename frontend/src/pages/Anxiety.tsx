import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
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
  Activity,
  // Sunrise,
  // Bed,
  MessageCircle,
  Stethoscope,
  Bot,
  BookOpen,
  Headphones,
  UserCheck,
  // Sun,
  Cloud,
  Star,
  Sparkles,
  Waves,
  Shield,
  BarChart3,
  TrendingUp,
  AlertCircle,
  AlertTriangle,
  Globe,
  CheckCircle,
  Pill,
} from "lucide-react";

export default function Anxiety() {
  const { isSignedIn } = useAuth(); // check login status
  const navigate = useNavigate(); // for redirection
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTestClick = (path: string) => {
    if (isSignedIn) {
      navigate(path); // go to quiz if logged in
    } else {
      navigate(`/login?redirect=${path}`); // go to login page if not logged in
    }
  };

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
            condition that can interfere with daily life. Here, you can learn
            what anxiety is, discover coping strategies, and take a Test to
            reflect on your wellbeing.
          </p>
          <button onClick={() => handleTestClick("/quiz/anxiety")} className="group px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            <span className="flex items-center">
                Take the Test
              <FileText className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
            </span>
          </button>
        </div>
      </section>

      {/* Understanding Section - EXPANDED */}
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

          {/* Original 3 Cards */}
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {/* Card 1 */}
            <div className="group bg-[#fcf9f4] rounded-3xl shadow-lg p-8 flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="font-bold text-xl text-blue-900">
                  What is Anxiety?
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
                Anxiety disorders involve excessive fear, worry, and related
                behavioral disturbances. Unlike normal stress, anxiety disorders
                cause significant distress and interfere with daily functioning.
              </p>
              <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg mt-auto">
                <strong>Clinical Definition:</strong> Persistent anxiety lasting
                6+ months that significantly impairs daily activities and
                relationships.
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-[#fcf9f4] rounded-3xl shadow-lg p-8 flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-200 to-green-300 rounded-2xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="font-bold text-xl text-blue-900">
                  How Does it Happen?
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
                Anxiety develops through complex interactions between genetics,
                brain chemistry, personality, and life events. The amygdala and
                prefrontal cortex play key roles in fear processing.
              </p>
              <div className="text-sm text-gray-600 bg-purple-50 p-3 rounded-lg mt-auto">
                <strong>Heritability:</strong> 30-40% genetic component with
                environmental triggers being crucial factors.
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-[#fcf9f4] rounded-3xl shadow-lg p-8 flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-200 to-pink-300 rounded-2xl flex items-center justify-center mr-4">
                  <X className="w-6 h-6 text-red-700" />
                </div>
                <h3 className="font-bold text-xl text-blue-900">
                  Myths vs Facts
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
                <span className="font-semibold text-red-600">Myth:</span>{" "}
                Anxiety is just being nervous or worried. <br />
                <span className="font-semibold text-green-600">Fact:</span>{" "}
                Anxiety disorders are real medical conditions with physical
                symptoms that require proper treatment.
              </p>
              <div className="text-sm text-gray-600 bg-green-50 p-3 rounded-lg mt-auto">
                <strong>Treatment Success:</strong> 70-90% of people respond
                well to evidence-based treatments.
              </div>
            </div>
          </div>

          {/* NEW: Statistics Section */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 shadow-xl mb-12 border border-blue-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full mb-4">
                <TrendingUp className="w-6 h-6 text-blue-900" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                Anxiety by the Numbers
              </h3>
              <p className="text-gray-600">
                Global statistics from WHO and NIMH research studies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  301M+
                </div>
                <p className="text-gray-700 font-semibold mb-1">
                  People Worldwide
                </p>
                <p className="text-sm text-gray-600">
                  Living with anxiety disorders globally (WHO, 2023)
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-bold text-cyan-600 mb-2">
                  13.7%
                </div>
                <p className="text-gray-700 font-semibold mb-1">
                  Indian Adults
                </p>
                <p className="text-sm text-gray-600">
                  Lifetime prevalence in India (NMHS 2015-16)
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-bold text-green-600 mb-2">2x</div>
                <p className="text-gray-700 font-semibold mb-1">
                  More in Women
                </p>
                <p className="text-sm text-gray-600">
                  Women are twice as likely to develop anxiety disorders
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-bold text-teal-600 mb-2">75%</div>
                <p className="text-gray-700 font-semibold mb-1">
                  Treatment Gap
                </p>
                <p className="text-sm text-gray-600">
                  Don't receive adequate treatment in India
                </p>
              </div>
            </div>
          </div>

          {/* NEW: Types of Anxiety */}
          <div className="mb-12">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full mb-4">
                <Brain className="w-6 h-6 text-indigo-700" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                Types of Anxiety Disorders
              </h3>
              <p className="text-gray-600">
                Understanding different forms of anxiety disorders
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Generalized Anxiety Disorder (GAD)",
                  desc: "Persistent, excessive worry about various aspects of life for at least 6 months. Affects daily functioning and causes physical symptoms.",
                  color: "from-blue-100 to-blue-200",
                  icon: <Wind className="w-6 h-6 text-blue-600" />,
                },
                {
                  title: "Panic Disorder",
                  desc: "Recurrent panic attacks with intense fear and physical symptoms like rapid heartbeat, sweating, and shortness of breath.",
                  color: "from-red-100 to-red-200",
                  icon: <Heart className="w-6 h-6 text-red-600" />,
                },
                {
                  title: "Social Anxiety Disorder",
                  desc: "Intense fear of social situations and being judged by others, leading to avoidance of social interactions.",
                  color: "from-purple-100 to-purple-200",
                  icon: <Users className="w-6 h-6 text-purple-600" />,
                },
                {
                  title: "Specific Phobias",
                  desc: "Intense, irrational fear of specific objects or situations (heights, animals, flying) that leads to avoidance behavior.",
                  color: "from-orange-100 to-orange-200",
                  icon: <Eye className="w-6 h-6 text-orange-600" />,
                },
                {
                  title: "Agoraphobia",
                  desc: "Fear of places or situations where escape might be difficult, often leading to avoidance of public spaces.",
                  color: "from-teal-100 to-teal-200",
                  icon: <Shield className="w-6 h-6 text-teal-600" />,
                },
                {
                  title: "Separation Anxiety Disorder",
                  desc: "Excessive fear of being separated from attachment figures, more common in children but can occur in adults.",
                  color: "from-pink-100 to-pink-200",
                  icon: <Heart className="w-6 h-6 text-pink-600" />,
                },
              ].map((type) => (
                <div
                  key={type.title}
                  className="group bg-[#fcf9f4] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                  >
                    {type.icon}
                  </div>
                  <h4 className="font-bold text-lg text-blue-900 mb-2">
                    {type.title}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {type.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* NEW: Common Symptoms - Detailed */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 shadow-xl mb-12 border border-blue-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full mb-4">
                <AlertCircle className="w-6 h-6 text-blue-900" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                Recognizing the Signs
              </h3>
              <p className="text-gray-600">
                Common symptoms that may indicate anxiety disorders
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Emotional/Mental Symptoms */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-xl text-blue-900 mb-4 flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-blue-600" />
                  Emotional & Mental Symptoms
                </h4>
                <ul className="space-y-3">
                  {[
                    "Excessive worry about future events or outcomes",
                    "Restlessness, feeling on edge or wound up",
                    "Difficulty concentrating or mind going blank",
                    "Irritability and being easily annoyed",
                    "Fear of losing control or 'going crazy'",
                    "Intrusive, unwanted thoughts or images",
                  ].map((symptom, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Physical Symptoms */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-xl text-blue-900 mb-4 flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-green-600" />
                  Physical Symptoms
                </h4>
                <ul className="space-y-3">
                  {[
                    "Rapid heartbeat, palpitations, or chest pain",
                    "Shortness of breath or feeling smothered",
                    "Sweating, trembling, or muscle tension",
                    "Nausea, dizziness, or lightheadedness",
                    "Sleep disturbances and chronic fatigue",
                    "Headaches and gastrointestinal issues",
                  ].map((symptom, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-800 font-semibold mb-1">
                    Panic Attack Warning
                  </p>
                  <p className="text-sm text-gray-700">
                    If you experience sudden, intense fear with physical
                    symptoms like chest pain and difficulty breathing, seek
                    immediate medical attention to rule out medical emergencies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* NEW: Risk Factors */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-200 to-pink-200 rounded-full mb-4">
                <Shield className="w-6 h-6 text-red-700" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                Risk Factors & Causes
              </h3>
              <p className="text-gray-600">
                Multiple factors can contribute to anxiety disorders
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-[#fcf9f4] rounded-2xl p-6 shadow-lg border border-blue-100">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-bold text-lg text-blue-900 mb-3">
                  Biological Factors
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Family history of anxiety disorders</li>
                  <li>• Brain chemistry imbalances (GABA, serotonin)</li>
                  <li>• Medical conditions (thyroid, heart conditions)</li>
                  <li>• Substance use or withdrawal</li>
                  <li>• Hormonal changes (pregnancy, menopause)</li>
                </ul>
              </div>

              <div className="bg-[#fcf9f4] rounded-2xl p-6 shadow-lg border border-blue-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-lg text-blue-900 mb-3">
                  Psychological Factors
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Childhood trauma or abuse</li>
                  <li>• Perfectionist personality traits</li>
                  <li>• Negative thinking patterns</li>
                  <li>• Low self-esteem and confidence</li>
                  <li>• Other mental health conditions</li>
                </ul>
              </div>

              <div className="bg-[#fcf9f4] rounded-2xl p-6 shadow-lg border border-blue-100">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold text-lg text-blue-900 mb-3">
                  Environmental Factors
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Chronic stress or major life changes</li>
                  <li>• Traumatic events or PTSD</li>
                  <li>• Caffeine and stimulant use</li>
                  <li>• Social pressures and expectations</li>
                  <li>• Financial or relationship problems</li>
                </ul>
              </div>
            </div>
          </div>

          {/* NEW: Treatment Options */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-green-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full mb-4">
                <Stethoscope className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                Evidence-Based Treatment Options
              </h3>
              <p className="text-gray-600">
                Anxiety disorders are highly treatable—here's what works
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-lg text-blue-900 mb-4 flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-blue-600" />
                  Psychotherapy (Talk Therapy)
                </h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Cognitive Behavioral Therapy (CBT):</strong>{" "}
                      Identifies and changes negative thought patterns and
                      behaviors
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Exposure Therapy:</strong> Gradual, controlled
                      exposure to feared situations or objects
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Acceptance and Commitment Therapy (ACT):</strong>{" "}
                      Develops psychological flexibility and mindfulness
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-lg text-blue-900 mb-4 flex items-center">
                  <Pill className="w-5 h-5 mr-2 text-purple-600" />
                  Medication
                </h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>SSRIs/SNRIs:</strong> First-line treatment for
                      most anxiety disorders
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Benzodiazepines:</strong> Short-term relief for
                      severe symptoms (used cautiously)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Beta-blockers:</strong> Help manage physical
                      symptoms like rapid heartbeat
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-lg text-blue-900 mb-4 flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-green-600" />
                  Lifestyle Interventions
                </h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Regular Exercise:</strong> Reduces anxiety
                      symptoms and improves mood
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Mindfulness & Meditation:</strong> Develops
                      present-moment awareness
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Limit Caffeine:</strong> Reduces physical anxiety
                      symptoms
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-lg text-blue-900 mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-pink-600" />
                  Support Systems
                </h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Support Groups:</strong> Connect with others who
                      understand anxiety
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Family Education:</strong> Help loved ones
                      understand and support recovery
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Peer Support:</strong> Learn from others' recovery
                      experiences
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Subtle Scientific References Section */}
          <div className="bg-gradient-to-br from-[#fcf9f4] to-blue-50 rounded-2xl p-8 border border-blue-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <BookOpen className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                Scientific References
              </h3>
              <p className="text-gray-600">
                Evidence-based sources supporting this content • Peer-reviewed
                research • Authoritative guidelines
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-sm relative z-10">
              <div className="group p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-blue-100/50 hover:shadow-md hover:bg-white/80 transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100/80 rounded-lg flex items-center justify-center mt-0.5">
                    <Globe className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <strong className="text-blue-800 block mb-1">
                      World Health Organization (2023)
                    </strong>
                    <p className="text-gray-700 mb-2">
                      Anxiety Disorders Fact Sheet
                    </p>
                    <a
                      href="https://www.who.int/news-room/fact-sheets/detail/anxiety-disorders"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 text-xs font-medium hover:underline transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Visit WHO Source</span>
                      <svg
                        className="w-3 h-3 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="group p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-blue-100/50 hover:shadow-md hover:bg-white/80 transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100/80 rounded-lg flex items-center justify-center mt-0.5">
                    <Book className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <strong className="text-purple-800 block mb-1">
                      National Mental Health Survey (2015-16)
                    </strong>
                    <p className="text-gray-700 mb-2">
                      NIMHANS - Anxiety prevalence in India
                    </p>
                    <a
                      href="https://nimhans.ac.in/national-mental-health-survey"
                      className="inline-flex items-center text-purple-600 hover:text-purple-700 text-xs font-medium hover:underline transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Visit NIMHANS Study</span>
                      <svg
                        className="w-3 h-3 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="group p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-blue-100/50 hover:shadow-md hover:bg-white/80 transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100/80 rounded-lg flex items-center justify-center mt-0.5">
                    <FileText className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <strong className="text-green-800 block mb-1">
                      Bandelow, B., et al. (2023)
                    </strong>
                    <p className="text-gray-700">
                      Treatment of anxiety disorders: A meta-analytic review.
                      <em className="text-gray-600">
                        World Journal of Biological Psychiatry, 24
                      </em>
                      (2), 89-117.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-blue-100/50 hover:shadow-md hover:bg-white/80 transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100/80 rounded-lg flex items-center justify-center mt-0.5">
                    <BarChart3 className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <strong className="text-indigo-800 block mb-1">
                      Tele MANAS (2023)
                    </strong>
                    <p className="text-gray-700 mb-2">
                      National mental health statistics and helpline data
                    </p>
                    <a
                      href="https://telemanas.mohfw.gov.in"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 text-xs font-medium hover:underline transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Visit Tele MANAS</span>
                      <svg
                        className="w-3 h-3 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="group p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-blue-100/50 hover:shadow-md hover:bg-white/80 transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100/80 rounded-lg flex items-center justify-center mt-0.5">
                    <Activity className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <strong className="text-orange-800 block mb-1">
                      Gordon, B. R., et al. (2022)
                    </strong>
                    <p className="text-gray-700">
                      Exercise therapy for anxiety disorders: systematic review
                      and network meta-analysis.
                      <em className="text-gray-600">
                        British Medical Journal, 378
                      </em>
                      , e070930.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-blue-100/50 hover:shadow-md hover:bg-white/80 transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100/80 rounded-lg flex items-center justify-center mt-0.5">
                    <Brain className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <strong className="text-red-800 block mb-1">
                      Ministry of Health & Family Welfare (2022)
                    </strong>
                    <p className="text-gray-700">
                      National Mental Health Programme and District Mental
                      Health Programme statistics for anxiety disorders in
                      India.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-100">
              <p className="text-center text-xs text-gray-500">
                All content is based on peer-reviewed research, WHO guidelines,
                and authoritative Indian medical sources
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
                bgColor: "from-cyan-100 to-cyan-200",
              },
              {
                icon: <Brain className="w-8 h-8 text-blue-600" />,
                title: "Meditation",
                desc: "Mindfulness helps anchor your thoughts and reduce worry spirals.",
                bgColor: "from-blue-100 to-blue-200",
              },
              {
                icon: <Coffee className="w-8 h-8 text-orange-600" />,
                title: "Reduce Caffeine",
                desc: "Too much caffeine can intensify anxiety symptoms and restlessness.",
                bgColor: "from-orange-100 to-orange-200",
              },
              {
                icon: <Moon className="w-8 h-8 text-indigo-600" />,
                title: "Rest Well",
                desc: "Good sleep hygiene calms the nervous system and restores energy.",
                bgColor: "from-indigo-100 to-indigo-200",
              },
              {
                icon: <Eye className="w-8 h-8 text-green-600" />,
                title: "Grounding Exercises",
                desc: "Focus on 5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste.",
                bgColor: "from-green-100 to-green-200",
              },
              {
                icon: <Users className="w-8 h-8 text-purple-600" />,
                title: "Talk to Someone",
                desc: "Reach out to a friend, counselor, or therapist for support.",
                bgColor: "from-purple-100 to-purple-200",
              },
              // NEW CARDS BELOW
              {
                icon: <Zap className="w-8 h-8 text-yellow-600" />,
                title: "Challenge Negative Thoughts",
                desc: "Question anxious thoughts and replace them with realistic, balanced perspectives.",
                bgColor: "from-yellow-100 to-yellow-200",
              },
              {
                icon: <Activity className="w-8 h-8 text-rose-600" />,
                title: "Physical Activity",
                desc: "Regular exercise releases endorphins and reduces stress hormones naturally.",
                bgColor: "from-rose-100 to-rose-200",
              },
              {
                icon: <FileText className="w-8 h-8 text-amber-600" />,
                title: "Journaling",
                desc: "Write down worries and thoughts to externalize them and gain perspective.",
                bgColor: "from-amber-100 to-amber-200",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-8 bg-[#fcf9f4] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}
                >
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
                bgColor: "from-blue-100 to-blue-200",
              },
              {
                icon: <Moon className="w-10 h-10 text-indigo-600" />,
                title: "Body",
                desc: "Exercise, hydrate well, and maintain balanced nutrition.",
                bgColor: "from-indigo-100 to-indigo-200",
              },
              {
                icon: <Heart className="w-10 h-10 text-red-600" />,
                title: "Emotions",
                desc: "Identify triggers and write about feelings to process them.",
                bgColor: "from-red-100 to-red-200",
              },
              {
                icon: <Users className="w-10 h-10 text-green-600" />,
                title: "Social",
                desc: "Stay connected with supportive people and groups.",
                bgColor: "from-green-100 to-green-200",
              },
              {
                icon: <Book className="w-10 h-10 text-purple-600" />,
                title: "Spiritual",
                desc: "Cultivate gratitude, faith, or mindfulness practices.",
                bgColor: "from-purple-100 to-purple-200",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-8 bg-[#fcf9f4] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-blue-100"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200`}
                >
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-4 text-blue-900">
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
          <Waves className="absolute bottom-20 right-1/4 w-12 h-12 text-cyan-400" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full mb-8">
            <FileText className="w-10 h-10 text-blue-700" />
          </div>
          <h2 className="text-4xl font-bold mb-6 text-blue-900">
            Take the Anxiety Self-Check Test
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-300 to-blue-300 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-700 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            A quick set of questions to help you reflect on your anxiety levels.
            This is not a diagnosis but a tool to build awareness and seek help
            if needed.
          </p>
          <button onClick={() => handleTestClick("/quiz/anxiety")} className="group px-10 py-5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
            <span className="flex items-center">
                Start Test
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
            <h2 className="text-4xl font-bold mb-4 text-blue-900">
              What's Next?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-cyan-300 mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Bot className="w-8 h-8 text-blue-600" />,
                title: "Chat with our Bot",
                description:
                  "Get instant support and guidance from our AI companion anytime you need it.",
                link: "/chat",
                bgColor: "from-blue-100 to-blue-200",
                comingSoon: false,
              },
              {
                icon: <BookOpen className="w-8 h-8 text-green-600" />,
                title: "Read Helpful Blogs",
                description:
                  "Explore articles and resources about mental health and wellness.",
                link: "/blog",
                bgColor: "from-green-100 to-green-200",
                comingSoon: true,
              },
              {
                icon: <Headphones className="w-8 h-8 text-purple-600" />,
                title: "Relaxation Exercises",
                description:
                  "Practice guided breathing, meditation, and calming techniques.",
                link: "/relaxation",
                bgColor: "from-purple-100 to-purple-200",
                comingSoon: false,
              },
              {
                icon: <UserCheck className="w-8 h-8 text-cyan-600" />,
                title: "Seek Professional Help",
                description:
                  "Find professional mental health resources and support services.",
                link: "/support",
                bgColor: "from-cyan-100 to-cyan-200",
                comingSoon: true,
              },
            ].map((item) => (
              <a
                href={item.link}
                key={item.title}
                className="relative group p-8 bg-[#fcf9f4] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-blue-100 overflow-hidden flex flex-col"
              >
                {/* Coming Soon Tag */}
                {item.comingSoon && (
                  <span className="absolute top-4 right-4 text-xs font-medium text-gray-400 border border-gray-300 px-2.5 py-1 rounded-md animate-pulse">
                    Soon
                  </span>
                )}

                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200`}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-blue-900 mb-3">
                  {item.title}
                </h3>

                {/* Description - with flex-grow to push button down */}
                <p className="text-sm text-gray-600 mb-6 leading-relaxed px-2 flex-grow">
                  {item.description}
                </p>

                {/* Enhanced "Explore" button - stays at bottom */}
                <div className="mt-auto">
                  <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-lg text-sm font-semibold group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-200 group-hover:gap-3">
                    <span>Explore</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        {/* Bottom */}
        <BackToTop />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
