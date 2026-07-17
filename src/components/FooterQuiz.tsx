"use client";

import { useState } from "react";
import { productQuiz } from "@/data/productQuiz";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  color: string;
  shape: string;
  scale: number[];
  x: number;
  y: number;
  rotate: number;
  duration: number;
}

const Celebration = () => {
  const [particles] = useState<Particle[]>(() => {
    const colors = ['#fde047', '#4ade80', '#60a5fa', '#f472b6', '#a78bfa', '#ff7e67'];
    return [...Array(30)].map((_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: Math.random() > 0.5 ? 'rounded-full' : 'rounded-sm',
      scale: [0, Math.random() * 2 + 1, Math.random() + 0.5],
      x: (Math.random() - 0.5) * 400,
      y: (Math.random() - 0.5) * 400 - 100,
      rotate: Math.random() * 360,
      duration: 1.5 + Math.random()
    }));
  });

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-50">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute w-3 h-3 ${p.shape}`}
          style={{ backgroundColor: p.color }}
          initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
          animate={{
            opacity: [1, 1, 0],
            scale: p.scale,
            x: p.x,
            y: p.y,
            rotate: p.rotate
          }}
          transition={{ duration: p.duration, ease: "easeOut" }}
        />
      ))}
    </div>
  );
};

export default function FooterQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  // We can randomize or just pick a random question to start
  const currentQuestion = productQuiz[currentQuestionIndex];

  const handleStart = () => {
    // Pick a random question out of the 50
    const randomIndex = Math.floor(Math.random() * productQuiz.length);
    setCurrentQuestionIndex(randomIndex);
    setQuizStarted(true);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === currentQuestion.correctAnswerIndex) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const randomIndex = Math.floor(Math.random() * productQuiz.length);
    setCurrentQuestionIndex(randomIndex);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-gray-800 max-w-2xl w-full mx-auto relative z-10 overflow-hidden">
      <h3 className="text-2xl font-bold mb-6 text-center text-primary-700">សាកល្បងចំណេះដឹង</h3>
      
      <AnimatePresence>
        {showResult && selectedAnswer === currentQuestion.correctAnswerIndex && <Celebration />}
      </AnimatePresence>
      
      {!quizStarted ? (
        <div className="text-center">
          <p className="mb-8 text-gray-600 text-lg">តើអ្នកស្គាល់ផលិតផលយើងច្បាស់កម្រិតណា? ចុចប៊ូតុងខាងក្រោមដើម្បីចាប់ផ្តើម!</p>
          <button 
            onClick={handleStart}
            className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-md"
          >
            ចាប់ផ្តើមលេង
          </button>
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <p className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wider">សំណួរ៖</p>
          <p className="text-xl font-bold mb-8 text-gray-800 leading-relaxed">
            {currentQuestion.question}
          </p>
          
          <div className="space-y-3 grow">
            {currentQuestion.options.map((option, index) => {
              let buttonStyle = "bg-gray-50 hover:bg-primary-50 text-gray-700 border-gray-200 hover:border-primary-300";
              
              if (showResult) {
                if (index === currentQuestion.correctAnswerIndex) {
                  buttonStyle = "bg-green-50 text-green-700 border-green-500 font-bold ring-1 ring-green-500";
                } else if (index === selectedAnswer) {
                  buttonStyle = "bg-red-50 text-red-600 border-red-400";
                } else {
                  buttonStyle = "bg-gray-50 text-gray-400 border-gray-100 opacity-60";
                }
              }

              return (
                <button
                  key={index}
                  disabled={showResult}
                  onClick={() => handleAnswer(index)}
                  className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-300 ${buttonStyle}`}
                >
                  <span className="mr-3 font-bold">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </button>
              );
            })}
          </div>

          {showResult && (
            <div className="mt-8 text-center animate-fade-in">
              {selectedAnswer === currentQuestion.correctAnswerIndex ? (
                <p className="text-green-600 font-bold mb-5 text-xl">🎉 ត្រឹមត្រូវ!</p>
              ) : (
                <p className="text-red-500 font-bold mb-5 text-xl">❌ មិនទាន់ត្រឹមត្រូវទេ!</p>
              )}
              <button 
                onClick={handleNextQuestion}
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-md hover:shadow-lg"
              >
                សំណួរបន្ទាប់ ➔
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
