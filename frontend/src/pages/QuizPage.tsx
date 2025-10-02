import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Home,
  Sparkles,
  TrendingUp,
  TrendingDown,
  Minus,
  CheckCircle,
  Info,
  Heart,
} from "lucide-react";

type Question = {
  id: number;
  text: string;
  options: string[];
};

// const depressionQuestions: Question[] = [
//   {
//     id: 1,
//     text: "How often do you feel sad, down, or low without a clear reason?",
//     options: ["Never / Not at all", "Sometimes", "Often", "Almost Always"],
//   },
//   {
//     id: 2,
//     text: "Do you still enjoy activities, hobbies, or things that once made you happy?",
//     options: ["Not at all", "Occasionally", "Frequently", "Almost Always"],
//   },
//   {
//     id: 3,
//     text: "How do you usually feel about your energy levels during the day?",
//     options: ["Never", "Sometimes", "Often", "Almost Always"],
//   },
//   {
//     id: 4,
//     text: "How often do you feel hopeful and positive about the future?",
//     options: ["Not at all", "Occasionally", "Frequently", "Almost Always"],
//   },
//   {
//     id: 5,
//     text: "How well do you sleep at night (quality, not just hours)?",
//     options: ["Never", "Sometimes", "Often", "Almost Always"],
//   },
//   {
//     id: 6,
//     text: "Do you find it difficult to concentrate on studies, work, or daily tasks?",
//     options: ["Never", "Sometimes", "Often", "Almost Always"],
//   },
//   {
//     id: 7,
//     text: "How often do you feel guilty, worthless, or like a burden to others?",
//     options: ["Never", "Sometimes", "Often", "Almost Always"],
//   },
//   {
//     id: 8,
//     text: "Do you notice changes in your appetite or eating habits lately?",
//     options: ["Never", "Sometimes", "Often", "Almost Always"],
//   },
//   {
//     id: 9,
//     text: "How often do you feel irritable, frustrated, or angry over small things?",
//     options: ["Never", "Sometimes", "Often", "Almost Always"],
//   },
//   {
//     id: 10,
//     text: "Do you feel motivated to get out of bed and start your day?",
//     options: ["Never", "Sometimes", "Often", "Almost Always"],
//   },
// ];

const depressionQuestions: Question[] = [
  {
    id: 1,
    text: "How have you been feeling lately?",
    options: ["Great", "Okay", "A bit low", "Really down"],
  },
  {
    id: 2,
    text: "Have you been able to enjoy things you usually like doing?",
    options: ["Yes, as usual", "Sometimes", "Rarely", "Not at all"],
  },
  {
    id: 3,
    text: "Do you feel more tired than usual, even after resting?",
    options: ["Not at all", "Sometimes", "Often", "Almost every day"],
  },
  {
    id: 4,
    text: "Has your sleep been good, or have you been sleeping too much or too little?",
    options: [
      "Just fine",
      "Sometimes disturbed",
      "Often disturbed",
      "Nearly every night",
    ],
  },
  {
    id: 5,
    text: "Have you noticed any changes in your appetite or eating habits?",
    options: [
      "No change",
      "Slight changes",
      "Noticeable changes",
      "Significant changes",
    ],
  },
  {
    id: 6,
    text: "Do you sometimes feel bad about yourself or like you're not good enough?",
    options: ["Not at all", "Sometimes", "Often", "Almost always"],
  },
  {
    id: 7,
    text: "Have you had trouble focusing on work, school, or daily tasks?",
    options: ["No trouble", "Sometimes", "Often", "Almost always"],
  },
  {
    id: 8,
    text: "Have you been moving or speaking more slowly than usual, or feeling restless?",
    options: ["Not at all", "Sometimes", "Often", "Almost always"],
  },
  {
    id: 9,
    text: "Have you been avoiding people or social situations?",
    options: ["Not at all", "Sometimes", "Often", "Almost always"],
  },
  {
    id: 10,
    text: "Have you had thoughts about hurting yourself or that life isn't worth living?",
    options: ["Never", "Rarely", "Sometimes", "Often"],
  },
];

// const anxietyQuestions: Question[] = [
//   {
//     id: 1,
//     text: "How often do you feel nervous or on-edge without a specific reason?",
//     options: ["Never", "Sometimes", "Often", "Almost Always"],
//   },
//   {
//     id: 2,
//     text: "How often do you find it hard to control or stop worrying once you start?",
//     options: ["Not at all", "Occasionally", "Frequently", "Almost Always"],
//   },
//   {
//     id: 3,
//     text: "How frequently do you experience a rapid heartbeat, sweating, or trembling during stressful situations?",
//     options: ["Never", "Sometimes", "Often", "Almost Always"],
//   },
//   {
//     id: 4,
//     text: "How often do you feel restless or unable to sit still during the day?",
//     options: ["Never", "Rarely", "Often", "Almost Always"],
//   },
//   {
//     id: 5,
//     text: "How often do you avoid social gatherings because of fear or discomfort?",
//     options: ["Never", "Sometimes", "Often", "Almost Always"],
//   },
//   {
//     id: 6,
//     text: "How often do you expect the worst to happen even when things are going well?",
//     options: ["Never", "Sometimes", "Often", "Almost Always"],
//   },
//   {
//     id: 7,
//     text: "How frequently do you have difficulty concentrating or focusing on tasks?",
//     options: ["Never", "Sometimes", "Often", "Almost Always"],
//   },
//   {
//     id: 8,
//     text: "How often do you have trouble falling asleep due to racing thoughts?",
//     options: ["Never", "Sometimes", "Often", "Almost Always"],
//   },
//   {
//     id: 9,
//     text: "How often do you wake up in the night with feelings of fear or worry?",
//     options: ["Never", "Sometimes", "Often", "Almost Always"],
//   },
//   {
//     id: 10,
//     text: "How frequently do you feel overwhelmed by your daily tasks or responsibilities?",
//     options: ["Never", "Sometimes", "Often", "Almost Always"],
//   },

// ];

const anxietyQuestions: Question[] = [
  {
    id: 1,
    text: "Lately, have you felt nervous, anxious, or on edge?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 2,
    text: "Do you find yourself worrying about many different things, even small stuff?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 3,
    text: "Have you felt tense, jittery, or unable to sit still recently?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 4,
    text: "Do you have trouble calming down or relaxing?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 5,
    text: "Have you felt more easily annoyed or irritable than usual?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 6,
    text: "Do your worries make it hard to focus, or do your thoughts race?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 7,
    text: "Has anxiety affected your sleep — trouble falling asleep, staying asleep, or restless sleep?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 8,
    text: "Have you noticed physical signs of anxiety, like a fast heartbeat, sweating, or shortness of breath?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 9,
    text: "Because of anxiety, have you been avoiding certain situations or tasks?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 10,
    text: "Has anxiety interfered with your daily life, work, or caused moments of panic?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
];

export default function QuizPage() {
  const { topic } = useParams<{ topic: string }>();

  const questions =
    topic === "depression" ? depressionQuestions : anxietyQuestions;

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  // Mock severity level - replace this with actual calculation from backend
  const severityLevel = "Moderate"; // This will come from your backend
  const severityScore = 65; // Percentage score from backend

  // Get severity details based on level
  const getSeverityDetails = () => {
    const levels: Record<
      string,
      {
        color: string;
        bgColor: string;
        icon: React.ReactElement;
        message: string;
      }
    > = {
      Minimal: {
        color: "text-green-600",
        bgColor: "bg-green-50",
        icon: <CheckCircle className="w-12 h-12 text-green-500" />,
        message:
          "Your responses suggest minimal symptoms. Keep maintaining healthy habits!",
      },
      Mild: {
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        icon: <Minus className="w-12 h-12 text-blue-500" />,
        message:
          "You're experiencing mild symptoms. Small lifestyle changes can make a big difference.",
      },
      Moderate: {
        color: "text-amber-600",
        bgColor: "bg-amber-50",
        icon: <TrendingUp className="w-12 h-12 text-amber-500" />,
        message:
          "Your responses indicate moderate symptoms. Consider talking to someone and exploring coping strategies.",
      },
      Severe: {
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        icon: <TrendingUp className="w-12 h-12 text-orange-500" />,
        message:
          "Your responses suggest significant symptoms. We strongly recommend seeking professional support.",
      },
      "Very Severe": {
        color: "text-red-600",
        bgColor: "bg-red-50",
        icon: <TrendingDown className="w-12 h-12 text-red-500" />,
        message:
          "Your responses indicate severe symptoms. Please reach out to a mental health professional immediately.",
      },
    };

    return levels[severityLevel] || levels.Moderate;
  };

  const details = getSeverityDetails();

  const handleAnswer = (option: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = option;
    setAnswers(newAnswers);

    if (currentQ < questions.length - 1) {
      setTimeout(() => setCurrentQ(currentQ + 1), 400);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdf6ec] to-[#f9f7f3] px-4 py-8">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 md:p-8">
        {!submitted ? (
          <>
            {/* Progress */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>
                  Question {currentQ + 1} of {questions.length}
                </span>
                <span>
                  {Math.round(((currentQ + 1) / questions.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#e8d9c9] h-2 rounded-full transition-all"
                  style={{
                    width: `${((currentQ + 1) / questions.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <AnimatePresence mode="wait">
              <motion.div
                key={questions[currentQ].id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
                className="mb-6"
              >
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                  {questions[currentQ].text}
                </h2>

                <div className="grid gap-4">
                  {questions[currentQ].options.map((option, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAnswer(option)}
                      className="w-full bg-[#fdf6ec] text-gray-700 font-medium py-3 px-4 rounded-lg shadow-md hover:bg-[#f3e7d9] transition text-left flex items-center"
                    >
                      <span className="mr-3 font-bold text-[#b08868]">
                        {String.fromCharCode(65 + idx)}.
                      </span>{" "}
                      {option}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Header with Icon */}
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#e8d9c9] to-[#d9c2a9] rounded-full mb-4"
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Assessment Complete!
              </h2>
              <p className="text-gray-600">
                Thank you for completing the {topic} assessment
              </p>
            </div>

            {/* Severity Level Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`${
                details.bgColor
              } rounded-2xl p-6 border-2 border-${details.color.replace(
                "text-",
                ""
              )}/20`}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                {/* Icon */}
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="flex-shrink-0"
                >
                  {details.icon}
                </motion.div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left w-full">
                  <h3
                    className={`text-xl md:text-2xl font-bold ${details.color} mb-2`}
                  >
                    {severityLevel}{" "}
                    {topic === "depression" ? "Depression" : "Anxiety"}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {details.message}
                  </p>

                  {/* Progress Bar with Better Visibility */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-semibold text-gray-700">
                      <span>Severity Score</span>
                      <span className={`${details.color}`}>
                        {severityScore}%
                      </span>
                    </div>
                    <div className="w-full bg-white rounded-full h-4 overflow-hidden shadow-inner border border-gray-200">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${severityScore}%` }}
                        transition={{
                          delay: 0.5,
                          duration: 1,
                          ease: "easeOut",
                        }}
                        className={`h-4 rounded-full ${details.color.replace(
                          "text-",
                          "bg-"
                        )} shadow-md relative`}
                        style={{
                          backgroundImage: `linear-gradient(90deg, 
                ${
                  details.color.includes("amber")
                    ? "#f59e0b, #d97706"
                    : details.color.includes("green")
                    ? "#10b981, #059669"
                    : details.color.includes("blue")
                    ? "#3b82f6, #2563eb"
                    : details.color.includes("orange")
                    ? "#f97316, #ea580c"
                    : details.color.includes("red")
                    ? "#ef4444, #dc2626"
                    : "#f59e0b, #d97706"
                })`,
                        }}
                      >
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Info Box */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg flex gap-3"
            >
              <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Important:</strong> This assessment is not a diagnosis.
                It's designed to help you understand your mental health better.
                For a professional evaluation, please consult a mental health
                professional.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-center text-lg font-semibold text-gray-800 flex items-center justify-center gap-2">
                <Heart className="w-5 h-5 text-red-400" />
                What Would You Like To Do Next?
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Chat Button */}
                <Link to="/chat">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-[#e8d9c9] to-[#d9c2a9] text-gray-900 font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex flex-col items-center gap-2"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span className="text-sm">Talk to Chatbot</span>
                  </motion.button>
                </Link>

                {/* Relaxation Button */}
                <Link to="/relaxation">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-[#b8e0d2] to-[#95d5b2] text-gray-900 font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex flex-col items-center gap-2"
                  >
                    <Sparkles className="w-6 h-6" />
                    <span className="text-sm">Relaxation Exercises</span>
                  </motion.button>
                </Link>

                {/* Home Button */}
                <Link to="/">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-[#ffd6a5] to-[#ffadad] text-gray-900 font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex flex-col items-center gap-2"
                  >
                    <Home className="w-6 h-6" />
                    <span className="text-sm">Go Home</span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Support Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center text-sm text-gray-500 italic"
            >
              Remember, seeking help is a sign of strength. You're not alone in
              this journey. ❤️
            </motion.p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

<style>{`
  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  
  .animate-shimmer {
    animation: shimmer 2s infinite;
  }
`}</style>;
