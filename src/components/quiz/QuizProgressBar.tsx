// src/components/quiz/QuizProgressBar.tsx

import React from 'react';

interface QuizProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}

const QuizProgressBar: React.FC<QuizProgressBarProps> = ({ currentQuestion, totalQuestions }) => {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  return (
    <>
      <div className="flex justify-between text-sm mb-3">
        <span className="font-semibold text-white">Frage {currentQuestion} von {totalQuestions}</span>
        <span className="text-[#B0DDDF] font-medium">{Math.round(progressPercentage)}%</span>
      </div>
      <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-white/30">
        <div
          className="bg-white h-3 rounded-full transition-all duration-500 shadow-lg"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </>
  );
};

export default QuizProgressBar;