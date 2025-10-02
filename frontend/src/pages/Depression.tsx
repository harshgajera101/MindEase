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
  // Bed,
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
  Target,
  TrendingUp,
  Clock,
  AlertCircle,
  AlertTriangle,
  Shield,
  Globe,
  CheckCircle,
  Pill,
  // Award,
  BarChart3,
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
            a test to reflect on your wellbeing.
          </p>
          <button className="group px-8 py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            <span className="flex items-center">
              <Link to="/quiz/depression">Take the Test</Link>
              <FileText className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
            </span>
          </button>
        </div>
      </section>

      {/* Understanding Section - EXPANDED */}
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
            {/* <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mb-8">
              Mental health refers to emotional, psychological, and social
              well-being. Depression is a serious mental health condition that
              affects how people think, feel, and behave in daily life.
              According to WHO, the burden of mental health problems in India is
              2443 disability-adjusted life years (DALYs) per 10000 population.
            </p> */}
          </div>

          {/* Original 3 Cards */}
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {/* Card 1 */}
            <div className="group bg-[#fcf9f4] rounded-3xl shadow-lg p-8 flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="font-bold text-xl text-amber-900">
                  What is Depression?
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
                A condition that affects mood, thoughts, and overall
                functioning. Symptoms include persistent sadness, loss of
                interest, fatigue, and feelings of hopelessness.
              </p>
              <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg mt-auto">
                <strong>Clinical Definition:</strong> Symptoms must persist for
                at least 2 weeks and represent a change from previous
                functioning.
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-[#fcf9f4] rounded-3xl shadow-lg p-8 flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-200 to-purple-300 rounded-2xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-purple-700" />
                </div>
                <h3 className="font-bold text-xl text-amber-900">
                  How Does it Happen?
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
                Depression can be triggered by various factors including genetic
                predisposition, brain chemistry, trauma, chronic stress, or
                major life events. Urban areas show a higher prevalence (13.5%)
                compared to rural areas (6.9%).
              </p>
              <div className="text-sm text-gray-600 bg-purple-50 p-3 rounded-lg mt-auto">
                <strong>Heritability:</strong> 40% genetic component according
                to twin studies.
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-[#fcf9f4] rounded-3xl shadow-lg p-8 flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-200 to-pink-300 rounded-2xl flex items-center justify-center mr-4">
                  <X className="w-6 h-6 text-red-700" />
                </div>
                <h3 className="font-bold text-xl text-amber-900">
                  Myths vs Facts
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
                <span className="font-semibold text-red-600">Myth:</span>{" "}
                Depression means being weak. <br />
                <span className="font-semibold text-green-600">Fact:</span>{" "}
                Depression is a medical condition that requires care and
                support, just like physical health issues.
              </p>
              <div className="text-sm text-gray-600 bg-green-50 p-3 rounded-lg mt-auto">
                <strong>Treatment Gap:</strong> 70% to 92% of people with mental
                disorders in India do not receive proper treatment.
              </div>
            </div>
          </div>

          {/* NEW: Statistics Section */}
          <div className="bg-gradient-to-br from-pink-50 to-yellow-50 rounded-3xl p-8 md:p-12 shadow-xl mb-12 border border-amber-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-200 to-yellow-200 rounded-full mb-4">
                <TrendingUp className="w-6 h-6 text-amber-900" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-2">
                Depression by the Numbers
              </h3>
              <p className="text-gray-600">
                Evidence-based statistics from WHO and research studies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-bold text-pink-600 mb-2">
                  280M+
                </div>
                <p className="text-gray-700 font-semibold mb-1">
                  People Worldwide
                </p>
                <p className="text-sm text-gray-600">
                  Living with depression globally (WHO, 2023)
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  1 in 3
                </div>
                <p className="text-gray-700 font-semibold mb-1">
                  Women Affected
                </p>
                <p className="text-sm text-gray-600">
                  Women are nearly twice as likely to experience depression
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  10.6%
                </div>
                <p className="text-gray-700 font-semibold mb-1">
                  Adults Affected
                </p>
                <p className="text-sm text-gray-600">
                  Indian adults suffer from mental disorders
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  $1.03T
                </div>
                <p className="text-gray-700 font-semibold mb-1">
                  Economic Loss
                </p>
                <p className="text-sm text-gray-600">
                  Due to mental health conditions (2012-2030)
                </p>
              </div>
            </div>
          </div>

          {/* NEW: Types of Depression */}
          <div className="mb-12">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full mb-4">
                <Brain className="w-6 h-6 text-indigo-700" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-2">
                Types of Depression
              </h3>
              <p className="text-gray-600">
                Understanding different forms of depressive disorders
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Major Depressive Disorder (MDD)",
                  desc: "Persistent feelings of sadness, hopelessness, and loss of interest lasting at least two weeks. Most common form of depression.",
                  color: "from-blue-100 to-blue-200",
                  icon: <Heart className="w-6 h-6 text-blue-600" />,
                },
                {
                  title: "Persistent Depressive Disorder",
                  desc: "Chronic depression lasting for 2+ years with less severe but long-lasting symptoms affecting daily functioning.",
                  color: "from-purple-100 to-purple-200",
                  icon: <Clock className="w-6 h-6 text-purple-600" />,
                },
                {
                  title: "Seasonal Affective Disorder (SAD)",
                  desc: "Depression that occurs during specific seasons, typically winter, due to reduced sunlight exposure.",
                  color: "from-cyan-100 to-cyan-200",
                  icon: <Sun className="w-6 h-6 text-cyan-600" />,
                },
                {
                  title: "Postpartum Depression",
                  desc: "Severe mood changes, anxiety, and exhaustion occurring after childbirth, affecting bonding and daily care.",
                  color: "from-pink-100 to-pink-200",
                  icon: <Heart className="w-6 h-6 text-pink-600" />,
                },
                {
                  title: "Bipolar Disorder",
                  desc: "Alternating episodes of depression and mania (elevated mood), requiring specialized treatment approaches.",
                  color: "from-yellow-100 to-yellow-200",
                  icon: <Zap className="w-6 h-6 text-yellow-600" />,
                },
                {
                  title: "Atypical Depression",
                  desc: "Depression with mood reactivity—symptoms temporarily improve in response to positive events or situations.",
                  color: "from-green-100 to-green-200",
                  icon: <Activity className="w-6 h-6 text-green-600" />,
                },
              ].map((type) => (
                <div
                  key={type.title}
                  className="group bg-[#fcf9f4] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                  >
                    {type.icon}
                  </div>
                  <h4 className="font-bold text-lg text-amber-900 mb-2">
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
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-xl mb-12 border border-amber-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full mb-4">
                <AlertCircle className="w-6 h-6 text-amber-900" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-2">
                Recognizing the Signs
              </h3>
              <p className="text-gray-600">
                Common symptoms that may indicate depression
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Emotional Symptoms */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-xl text-amber-900 mb-4 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-pink-600" />
                  Emotional Symptoms
                </h4>
                <ul className="space-y-3">
                  {[
                    "Persistent sadness, emptiness, or hopelessness",
                    "Loss of interest in activities once enjoyed",
                    "Feelings of worthlessness or excessive guilt",
                    "Irritability, frustration, or restlessness",
                    "Difficulty experiencing pleasure (anhedonia)",
                    "Frequent crying or emotional numbness",
                  ].map((symptom, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Physical Symptoms */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-xl text-amber-900 mb-4 flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-orange-600" />
                  Physical Symptoms
                </h4>
                <ul className="space-y-3">
                  {[
                    "Changes in appetite or significant weight changes",
                    "Sleep disturbances (insomnia or oversleeping)",
                    "Chronic fatigue and low energy levels",
                    "Physical aches, pains, or digestive issues",
                    "Slowed movements or speech",
                    "Difficulty concentrating or making decisions",
                  ].map((symptom, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
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
                    Crisis Warning Signs
                  </p>
                  <p className="text-sm text-gray-700">
                    If you're experiencing thoughts of self-harm or suicide,
                    please seek immediate help. Call emergency services or
                    contact a crisis helpline immediately.
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
              <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-2">
                Risk Factors & Causes
              </h3>
              <p className="text-gray-600">
                Multiple factors can contribute to depression
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-[#fcf9f4] rounded-2xl p-6 shadow-lg border border-amber-100">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-bold text-lg text-amber-900 mb-3">
                  Biological Factors
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Family history of depression</li>
                  <li>• Brain chemistry imbalances</li>
                  <li>• Hormonal changes</li>
                  <li>• Chronic medical conditions</li>
                  <li>• Certain medications</li>
                </ul>
              </div>

              <div className="bg-[#fcf9f4] rounded-2xl p-6 shadow-lg border border-amber-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-lg text-amber-900 mb-3">
                  Psychological Factors
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• History of trauma or abuse</li>
                  <li>• Low self-esteem</li>
                  <li>• Negative thinking patterns</li>
                  <li>• Perfectionism</li>
                  <li>• Other mental health conditions</li>
                </ul>
              </div>

              <div className="bg-[#fcf9f4] rounded-2xl p-6 shadow-lg border border-amber-100">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold text-lg text-amber-900 mb-3">
                  Environmental Factors
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Stressful life events</li>
                  <li>• Social isolation or loneliness</li>
                  <li>• Financial difficulties</li>
                  <li>• Relationship problems</li>
                  <li>• Work-related stress</li>
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
              <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-2">
                Evidence-Based Treatment Options
              </h3>
              <p className="text-gray-600">
                Depression is treatable—here's what works
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-lg text-amber-900 mb-4 flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-blue-600" />
                  Psychotherapy (Talk Therapy)
                </h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Cognitive Behavioral Therapy (CBT):</strong>{" "}
                      Changes negative thought patterns and behaviors
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Interpersonal Therapy (IPT):</strong> Improves
                      relationships and communication
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Dialectical Behavior Therapy (DBT):</strong>{" "}
                      Teaches emotional regulation skills
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-lg text-amber-900 mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-pink-600" />
                  Support Systems
                </h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Community Support:</strong> Access to mental
                      health services through primary healthcare centers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Tele MANAS:</strong> 24/7 mental health helpline
                      (14416 / 1800-89-14416) available in 20 Indian languages
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Professional Care:</strong> Access mental health
                      services through Ayushman Bharat Health & Wellness Centres
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-lg text-amber-900 mb-4 flex items-center">
                  <Pill className="w-5 h-5 mr-2 text-purple-600" />
                  Medication
                </h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Antidepressants:</strong> Help balance brain
                      chemicals (SSRIs, SNRIs)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Combination Therapy:</strong> Often most effective
                      when combined with therapy
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Monitored Care:</strong> Regular follow-ups with
                      healthcare provider essential
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-lg text-amber-900 mb-4 flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-green-600" />
                  Lifestyle Changes
                </h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Regular Exercise:</strong> 30 minutes daily shown
                      to reduce symptoms
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Healthy Diet:</strong> Nutrient-rich foods support
                      brain health
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Sleep Hygiene:</strong> Consistent sleep schedule
                      improves mood
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Subtle Scientific References Section */}
          <div className="bg-gradient-to-br from-[#fcf9f4] to-amber-50 rounded-2xl p-8 border border-amber-100">
            {/* Simple header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                <BookOpen className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-2">
                Scientific References
              </h3>
              <p className="text-gray-600">
                Evidence-based sources supporting this content • Peer-reviewed
                research • Authoritative guidelines
              </p>
            </div>

            {/* Clean references list */}
            <div className="grid md:grid-cols-2 gap-4 text-sm relative z-10">
              <div className="group p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-amber-100/50 hover:shadow-md hover:bg-white/80 transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100/80 rounded-lg flex items-center justify-center mt-0.5">
                    <Globe className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <strong className="text-blue-800 block mb-1">
                      WHO Data Insight - India (2024)
                    </strong>
                    <p className="text-gray-700 mb-2">Mental Health Statistics & Impact Assessment</p>
                    <a
                      href="https://mohfw.gov.in/?q=en/pressrelease-206"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 text-xs font-medium hover:underline transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View WHO Report
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

              <div className="group p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-amber-100/50 hover:shadow-md hover:bg-white/80 transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100/80 rounded-lg flex items-center justify-center mt-0.5">
                    <Book className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <strong className="text-purple-800 block mb-1">
                      NIMHANS National Mental Health Survey (2015-16)
                    </strong>
                    <p className="text-gray-700 mb-2">
                      Comprehensive Mental Health Data Analysis
                    </p>
                    <a
                      href="https://mohfw.gov.in/sites/default/files/National%20Mental%20Health%20Survey%2C%202015-16%20-%20Summary%20Report_0.pdf"
                      className="inline-flex items-center text-purple-600 hover:text-purple-700 text-xs font-medium hover:underline transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Visit DSM-5-TR</span>
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

              <div className="group p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-amber-100/50 hover:shadow-md hover:bg-white/80 transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100/80 rounded-lg flex items-center justify-center mt-0.5">
                    <FileText className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <strong className="text-green-800 block mb-1">
                      Economic Survey 2024-25
                    </strong>
                    <p className="text-gray-700 mb-2">
                      Mental Health Economic Impact & Strategies
                    </p>
                    <a
                      href="https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2034931"
                      className="inline-flex items-center text-green-600 hover:text-green-700 text-xs font-medium hover:underline transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Economic Survey
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

              <div className="group p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-amber-100/50 hover:shadow-md hover:bg-white/80 transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100/80 rounded-lg flex items-center justify-center mt-0.5">
                    <BarChart3 className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <strong className="text-indigo-800 block mb-1">
                      NIMH (2023)
                    </strong>
                    <p className="text-gray-700 mb-2">
                      Major Depression Statistics. National Institute of Mental
                      Health
                    </p>
                    <a
                      href="https://www.nimh.nih.gov/health/statistics/major-depression"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 text-xs font-medium hover:underline transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Visit NIMH Statistics</span>
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

              <div className="group p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-amber-100/50 hover:shadow-md hover:bg-white/80 transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100/80 rounded-lg flex items-center justify-center mt-0.5">
                    <Activity className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <strong className="text-orange-800 block mb-1">
                      Rosenbaum, S., et al. (2022)
                    </strong>
                    <p className="text-gray-700">
                      Physical activity interventions for people with mental
                      illness: A systematic review and meta-analysis.{" "}
                      <em className="text-gray-600">
                        Journal of Clinical Medicine, 11
                      </em>
                      (2), 492.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-amber-100/50 hover:shadow-md hover:bg-white/80 transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100/80 rounded-lg flex items-center justify-center mt-0.5">
                    <Brain className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <strong className="text-red-800 block mb-1">
                      Sullivan, P. F., et al. (2021)
                    </strong>
                    <p className="text-gray-700">
                      Genetic architectures of psychiatric disorders: The
                      emerging picture.{" "}
                      <em className="text-gray-600">
                        Nature Reviews Genetics, 22
                      </em>
                      (5), 289-310.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Simple footer note */}
            <div className="mt-6 pt-4 border-t border-amber-100">
              <p className="text-center text-xs text-gray-500">
                All content is based on peer-reviewed research and authoritative
                medical sources
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
                icon: <Moon className="w-8 h-8 text-indigo-600" />,
                title: "Sleep Routine",
                desc: "Consistent rest helps regulate mood and energy.",
                bgColor: "from-indigo-100 to-indigo-200",
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-pink-600" />,
                title: "Talk to Someone",
                desc: "Sharing with a friend, family, or therapist reduces isolation.",
                bgColor: "from-pink-100 to-pink-200",
              },
              {
                icon: <Stethoscope className="w-8 h-8 text-purple-600" />,
                title: "Therapy",
                desc: "CBT and counseling provide professional guidance for recovery.",
                bgColor: "from-purple-100 to-purple-200",
              },
              // NEW CARDS BELOW
              {
                icon: <Sun className="w-8 h-8 text-yellow-600" />,
                title: "Sunlight Exposure",
                desc: "Natural light boosts serotonin levels and helps regulate your body clock.",
                bgColor: "from-yellow-100 to-yellow-200",
              },
              {
                icon: <Users className="w-8 h-8 text-teal-600" />,
                title: "Social Connection",
                desc: "Regular interaction with supportive people combats loneliness and isolation.",
                bgColor: "from-teal-100 to-teal-200",
              },
              {
                icon: <Target className="w-8 h-8 text-rose-600" />,
                title: "Set Small Goals",
                desc: "Break tasks into manageable steps to rebuild sense of accomplishment.",
                bgColor: "from-rose-100 to-rose-200",
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
          {/* Icon - Changed to match Understanding Depression colors */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-200 to-yellow-200 rounded-full mb-8">
            <FileText className="w-10 h-10 text-amber-900" />
          </div>

          <h2 className="text-4xl font-bold mb-6 text-amber-900">
            Take the Depression Self-Check Test
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-yellow-300 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-700 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Answer a few simple questions to better understand your mental
            health. This is not a diagnosis but a self-reflection tool.
          </p>

          {/* Button - Changed to match Understanding Depression colors */}
          <button className="group px-10 py-5 bg-gradient-to-r from-pink-400 to-pink-500 text-white text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
            <span className="flex items-center">
              <Link to="/quiz/depression">Start Test</Link>
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
                icon: <UserCheck className="w-8 h-8 text-orange-600" />,
                title: "Seek Professional Help",
                description:
                  "Find professional mental health resources and support services.",
                link: "/support",
                bgColor: "from-orange-100 to-orange-200",
                comingSoon: true,
              },
            ].map((item) => (
              <a
                href={item.link}
                key={item.title}
                className="relative group p-8 bg-[#fcf9f4] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-amber-100 overflow-hidden flex flex-col"
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
                <h3 className="text-lg font-bold text-amber-900 mb-3">
                  {item.title}
                </h3>

                {/* Description - with flex-grow to push button down */}
                <p className="text-sm text-gray-600 mb-6 leading-relaxed px-2 flex-grow">
                  {item.description}
                </p>

                {/* Enhanced "Explore" button - stays at bottom */}
                <div className="mt-auto">
                  <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 rounded-lg text-sm font-semibold group-hover:from-amber-200 group-hover:to-yellow-200 transition-all duration-200 group-hover:gap-3">
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
