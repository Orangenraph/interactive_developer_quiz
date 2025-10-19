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
        <span className="font-semibold text-[#00383C]">Frage {currentQuestion} von {totalQuestions}</span>
        <span className="text-[#007179] font-medium">{Math.round(progressPercentage)}%</span>
      </div>
      <div className="w-full bg-[#E5F1F2] rounded-full h-2.5 mb-4 overflow-hidden backdrop-blur-sm border border-[#BFDCDE]/30">
        <div
          className="bg-gradient-to-r from-[#007179] to-[#00383C] h-2.5 rounded-full transition-all duration-500 shadow-md"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </>
  );
};

export default QuizProgressBar;