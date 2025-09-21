// ./pages/QuizPage.tsx

import { useState } from "react";
// --- MODIFIED: Import useNavigate ---
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

type Question = {
  id: number;
  text: string;
  options: string[];
};

// --- Your questions arrays remain the same ---
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
    options: ["Just fine", "Sometimes disturbed", "Often disturbed", "Nearly every night"],
  },
  {
    id: 5,
    text: "Have you noticed any changes in your appetite or eating habits?",
    options: ["No change", "Slight changes", "Noticeable changes", "Significant changes"],
  },
  {
    id: 6,
    text: "Do you sometimes feel bad about yourself or like you’re not good enough?",
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
    text: "Have you had thoughts about hurting yourself or that life isn’t worth living?",
    options: ["Never", "Rarely", "Sometimes", "Often"],
  },
];

const anxietyQuestions: Question[] = [
    {
      id: 1,
      text: "Lately, have you felt nervous, anxious, or on edge?",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    },
    {
      id: 2,
      text: "Do you find yourself worrying about many different things, even small stuff?",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    },
    {
      id: 3,
      text: "Have you felt tense, jittery, or unable to sit still recently?",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    },
    {
      id: 4,
      text: "Do you have trouble calming down or relaxing?",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    },
    {
      id: 5,
      text: "Have you felt more easily annoyed or irritable than usual?",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    },
    {
      id: 6,
      text: "Do your worries make it hard to focus, or do your thoughts race?",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    },
    {
      id: 7,
      text: "Has anxiety affected your sleep — trouble falling asleep, staying asleep, or restless sleep?",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    },
    {
      id: 8,
      text: "Have you noticed physical signs of anxiety, like a fast heartbeat, sweating, or shortness of breath?",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    },
    {
      id: 9,
      text: "Because of anxiety, have you been avoiding certain situations or tasks?",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    },
    {
      id: 10,
      text: "Has anxiety interfered with your daily life, work, or caused moments of panic?",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    },
];


export default function QuizPage() {
  const { topic } = useParams<{ topic: string }>();
  // --- NEW: Initialize useNavigate ---
  const navigate = useNavigate();

  const questions =
    topic === "depression" ? depressionQuestions : anxietyQuestions;

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]); // Store scores directly
  const [submitted, setSubmitted] = useState(false);
  // --- NEW: Loading state for API call ---
  const [isLoading, setIsLoading] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = optionIndex;
    setAnswers(newAnswers);

    if (currentQ < questions.length - 1) {
      setTimeout(() => setCurrentQ(currentQ + 1), 400);
    } else {
      setTimeout(() => setSubmitted(true), 400);
    }
  };

  // --- NEW: Function to calculate final score ---
  const calculateFinalScore = (): number => {
    // Sums up all the selected option indices (0, 1, 2, 3)
    return answers.reduce((total, currentScore) => total + currentScore, 0);
  };
  
  // --- NEW: Function to handle API call and navigation ---
  const handleProceedToChat = async () => {
    if (!topic) return;
    setIsLoading(true);

    const finalScore = calculateFinalScore();

    try {
      const response = await fetch('http://127.0.0.1:5000/start_session', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              topic: topic,
              score: finalScore,
          }),
      });

      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Navigate to the Chat page and pass the received data as state
      navigate('/chat', { state: { chatData: data } });

    } catch (error) {
        console.error("Failed to start chat session:", error);
        alert("Could not connect to the chatbot. Please try again later.");
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdf6ec] to-[#f9f7f3] px-4 py-8">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        {!submitted ? (
          <>
            {/* Progress Bar (no changes) */}
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

            {/* Question and Options */}
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
                      // --- MODIFIED: Pass the index (score) ---
                      onClick={() => handleAnswer(idx)}
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🎉 Quiz Completed!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for completing the{" "}
              <span className="font-semibold capitalize">{topic}</span> quiz. Based on your
              responses, our chatbot can guide you further.
            </p>
            {/* --- MODIFIED: Button now calls the API handler --- */}
            <button
              onClick={handleProceedToChat}
              disabled={isLoading}
              className="bg-[#e8d9c9] text-gray-900 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-[#d9c2a9] transition disabled:opacity-50 disabled:cursor-wait"
            >
              {isLoading ? "Connecting..." : "Talk to Chatbot"}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}