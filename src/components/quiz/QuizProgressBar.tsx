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
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium">Frage {currentQuestion} von {totalQuestions}</span>
      </div>
      <div className="w-full bg-white bg-opacity-30 rounded-full h-3 mb-4">
        <div
          className="bg-black h-3 rounded-full transition-all duration-300 shadow-sm"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </>
  );
};

export default QuizProgressBar;