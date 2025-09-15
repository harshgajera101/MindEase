import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

type Question = {
  id: number;
  text: string;
  options: string[];
};

const depressionQuestions: Question[] = [
  {
    id: 1,
    text: "How often do you feel sad, down, or low without a clear reason?",
    options: ["Never / Not at all", "Sometimes", "Often", "Almost Always"],
  },
  {
    id: 2,
    text: "Do you still enjoy activities, hobbies, or things that once made you happy?",
    options: ["Not at all", "Occasionally", "Frequently", "Almost Always"],
  },
  {
    id: 3,
    text: "How do you usually feel about your energy levels during the day?",
    options: ["Never", "Sometimes", "Often", "Almost Always"],
  },
  {
    id: 4,
    text: "How often do you feel hopeful and positive about the future?",
    options: ["Not at all", "Occasionally", "Frequently", "Almost Always"],
  },
  {
    id: 5,
    text: "How well do you sleep at night (quality, not just hours)?",
    options: ["Never", "Sometimes", "Often", "Almost Always"],
  },
  {
    id: 6,
    text: "Do you find it difficult to concentrate on studies, work, or daily tasks?",
    options: ["Never", "Sometimes", "Often", "Almost Always"],
  },
  {
    id: 7,
    text: "How often do you feel guilty, worthless, or like a burden to others?",
    options: ["Never", "Sometimes", "Often", "Almost Always"],
  },
  {
    id: 8,
    text: "Do you notice changes in your appetite or eating habits lately?",
    options: ["Never", "Sometimes", "Often", "Almost Always"],
  },
  {
    id: 9,
    text: "How often do you feel irritable, frustrated, or angry over small things?",
    options: ["Never", "Sometimes", "Often", "Almost Always"],
  },
  {
    id: 10,
    text: "Do you feel motivated to get out of bed and start your day?",
    options: ["Never", "Sometimes", "Often", "Almost Always"],
  },
];

const anxietyQuestions: Question[] = [
  {
    id: 1,
    text: "How often do you feel nervous or on-edge without a specific reason?",
    options: ["Never", "Sometimes", "Often", "Almost Always"],
  },
  {
    id: 2,
    text: "How often do you find it hard to control or stop worrying once you start?",
    options: ["Not at all", "Occasionally", "Frequently", "Almost Always"],
  },
  {
    id: 3,
    text: "How frequently do you experience a rapid heartbeat, sweating, or trembling during stressful situations?",
    options: ["Never", "Sometimes", "Often", "Almost Always"],
  },
  {
    id: 4,
    text: "How often do you feel restless or unable to sit still during the day?",
    options: ["Never", "Rarely", "Often", "Almost Always"],
  },
  {
    id: 5,
    text: "How often do you avoid social gatherings because of fear or discomfort?",
    options: ["Never", "Sometimes", "Often", "Almost Always"],
  },
  {
    id: 6,
    text: "How often do you expect the worst to happen even when things are going well?",
    options: ["Never", "Sometimes", "Often", "Almost Always"],
  },
  {
    id: 7,
    text: "How frequently do you have difficulty concentrating or focusing on tasks?",
    options: ["Never", "Sometimes", "Often", "Almost Always"],
  },
  {
    id: 8,
    text: "How often do you have trouble falling asleep due to racing thoughts?",
    options: ["Never", "Sometimes", "Often", "Almost Always"],
  },
  {
    id: 9,
    text: "How often do you wake up in the night with feelings of fear or worry?",
    options: ["Never", "Sometimes", "Often", "Almost Always"],
  },
  {
    id: 10,
    text: "How frequently do you feel overwhelmed by your daily tasks or responsibilities?",
    options: ["Never", "Sometimes", "Often", "Almost Always"],
  },
  
];

export default function QuizPage() {
  const { topic } = useParams<{ topic: string }>();

  const questions =
    topic === "depression" ? depressionQuestions : anxietyQuestions;

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

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
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
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
              <span className="font-semibold">{topic}</span> quiz. Based on your
              responses, our chatbot can guide you further.
            </p>
            <button
            //   onClick={() => alert("Redirecting to chatbot...")}
              className="bg-[#e8d9c9] text-gray-900 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-[#d9c2a9] transition"
            >
              <Link to="/chat">Talk to Chatbot</Link>
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
