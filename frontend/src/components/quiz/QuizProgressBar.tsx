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
      <div className="flex justify-between text-[clamp(0.75rem,1vw,0.875rem)] mb-[1.5vh]">
        <span className="font-semibold text-white">Frage {currentQuestion} von {totalQuestions}</span>
        <span className="text-[#B0DDDF] font-medium">{Math.round(progressPercentage)}%</span>
      </div>
      <div className="w-full bg-white/20 rounded-full h-[1.5vh] overflow-hidden backdrop-blur-sm border border-white/30">
        <div
          className="bg-white h-[1.5vh] rounded-full transition-all duration-500 shadow-lg"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </>
  );
};

export default QuizProgressBar;