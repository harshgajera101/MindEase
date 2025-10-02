// src/pages/About.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Heart,
  Brain,
  Users,
  Book,
  Shield,
  Clock,
  Lock,
  Target,
  Eye,
  Globe,
  Lightbulb,
  FileText,
  UserCheck,
  Phone,
} from "lucide-react";
import BackToTop from "../components/BackToTop";

export default function About() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Mission & Vision */}
      <section className="px-6 md:px-12 py-20 bg-[#fcf9f4]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full mb-6">
              <Target className="w-8 h-8 text-amber-700" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Our Mission & Vision
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-orange-300 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center mr-4">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-3xl font-bold text-amber-900">
                  Our Mission
                </h3>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To make mental health support accessible, immediate, and
                stigma-free for everyone. We believe that seeking help for
                mental wellness should be as natural as taking care of your
                physical health.
              </p>

              <div className="space-y-3">
                {[
                  "Break down barriers to mental health care",
                  "Provide instant, compassionate support",
                  "Reduce stigma around mental wellness",
                  "Empower individuals with coping tools",
                ].map((point, i) => (
                  <div key={i} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                    {point}
                  </div>
                ))}
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mr-4">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-amber-900">
                  Our Vision
                </h3>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A world where mental health support is universally accessible,
                where AI and human compassion work together to create a more
                emotionally healthy society for all.
              </p>

              <div className="space-y-3">
                {[
                  "Global mental wellness accessibility",
                  "AI-enhanced therapeutic support",
                  "Community-driven healing",
                  "Preventive mental health care",
                ].map((point, i) => (
                  <div key={i} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Project */}
      <section className="px-6 md:px-12 py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mb-6">
              <Lightbulb className="w-8 h-8 text-purple-700" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Why This Project Matters
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-300 to-pink-300 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Mental health challenges affect millions globally, yet barriers to
              care persist. Here's why MindEase is needed now more than ever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Users className="w-8 h-8 text-red-600" />,
                stat: "1 in 5",
                title: "Adults Affected",
                desc: "1 in 5 Adult will experience mental health issues in their lifetime, yet many never receive support.",
                bgColor: "from-red-100 to-red-200",
              },
              {
                icon: <Clock className="w-8 h-8 text-orange-600" />,
                stat: "6 Months",
                title: "Average Wait Time",
                desc: "The average wait time for mental health services can be months, when help is needed immediately.",
                bgColor: "from-orange-100 to-orange-200",
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-600" />,
                stat: "60%",
                title: "Don't Seek Help",
                desc: "60% of people with mental health conditions don't receive treatment due to stigma and barriers.",
                bgColor: "from-blue-100 to-blue-200",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-amber-900 mb-2">
                  {stat.stat}
                </div>
                <h3 className="text-xl font-semibold text-amber-800 mb-4">
                  {stat.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-amber-900 mb-6">
                  Breaking Down Barriers
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Globe className="w-6 h-6 text-green-600" />,
                      title: "Accessibility",
                      desc: "Available 24/7 from anywhere with internet access",
                    },
                    {
                      icon: <Lock className="w-6 h-6 text-blue-600" />,
                      title: "Privacy",
                      desc: "No stigma, no judgment - completely anonymous support",
                    },
                    {
                      icon: <Heart className="w-6 h-6 text-pink-600" />,
                      title: "Immediate Help",
                      desc: "Instant response when you need support most",
                    },
                    {
                      icon: <Brain className="w-6 h-6 text-purple-600" />,
                      title: "Evidence-Based",
                      desc: "Grounded in proven therapeutic techniques and research",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-amber-800 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-12 h-12 text-purple-700" />
                  </div>
                  <h4 className="text-xl font-bold text-amber-900 mb-4">
                    Making a Difference
                  </h4>
                  <p className="text-gray-700">
                    Every conversation matters. Every person deserves support.
                    MindEase bridges the gap between needing help and getting
                    it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Ethical Considerations */}
      <section className="px-6 md:px-12 py-20 bg-[#fcf9f4]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-200 to-blue-200 rounded-full mb-6">
              <Users className="w-8 h-8 text-green-700" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Our Commitment to Ethics
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-300 to-blue-300 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Built with responsibility, transparency, and your wellbeing as our
              highest priority
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Ethical Principles */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-amber-900 mb-8">
                Our Ethical Principles
              </h3>

              {[
                {
                  icon: <Shield className="w-6 h-6 text-blue-600" />,
                  title: "Privacy First",
                  desc: "Your data is encrypted, never sold, and processed with the highest security standards. We believe privacy is fundamental to healing.",
                },
                {
                  icon: <Heart className="w-6 h-6 text-pink-600" />,
                  title: "Do No Harm",
                  desc: "Our AI is trained to recognize crisis situations and always directs users to professional help when needed. We supplement, never replace, professional care.",
                },
                {
                  icon: <Eye className="w-6 h-6 text-purple-600" />,
                  title: "Transparency",
                  desc: "We're clear about our AI's capabilities and limitations. Users always know they're interacting with AI, not a human therapist.",
                },
                {
                  icon: <Users className="w-6 h-6 text-green-600" />,
                  title: "Inclusivity",
                  desc: "MindEase is designed to be culturally sensitive and accessible to people from all backgrounds, identities, and experiences.",
                },
                {
                  icon: <Book className="w-6 h-6 text-orange-600" />,
                  title: "Evidence-Based",
                  desc: "Aligned with National Mental Health Programme (NMHP) and Mental Healthcare Act, 2017 standards for ethical mental healthcare delivery.",
                },
              ].map((principle, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                    {principle.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-800 mb-2">
                      {principle.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {principle.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Safety Measures */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-amber-900 mb-8">
                Safety Measures
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-2xl">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800">
                      Crisis Detection
                    </h4>
                    <p className="text-red-700 text-sm">
                      AI trained to identify crisis situations and provide
                      immediate resources
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-2xl">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800">
                      Emergency Contacts
                    </h4>
                    <p className="text-blue-700 text-sm">
                      Direct links to crisis hotlines and emergency services
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-2xl">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <FileText className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">
                      Professional Resources
                    </h4>
                    <p className="text-green-700 text-sm">
                      Curated list of licensed therapists and mental health
                      services
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-2xl">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Brain className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800">
                      Continuous Learning
                    </h4>
                    <p className="text-purple-700 text-sm">
                      Regular updates and improvements based on latest research
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-200">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                    <Lightbulb className="w-4 h-4 text-amber-600" />
                  </div>
                  <h4 className="font-bold text-amber-800">Important Note</h4>
                </div>
                <p className="text-amber-700 text-sm leading-relaxed">
                  MindEase is designed to complement, not replace, professional
                  mental health care. If you're experiencing a mental health
                  crisis, please contact emergency services or a crisis hotline
                  immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
        <BackToTop/>
      </section>

      <Footer/>
    </>
  );
}
