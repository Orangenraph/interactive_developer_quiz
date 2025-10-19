// src/components/quiz/QuizHeader.tsx

import React from 'react';
import QuizProgressBar from './QuizProgressBar';

interface QuizHeaderProps {
  playerName: string;
  currentQuestion: number;
  totalQuestions: number;
  isLastQuestion: boolean;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({
  playerName,
  currentQuestion,
  totalQuestions,
  isLastQuestion
}) => {
  return (
    <div className="backdrop-blur-xl bg-gradient-to-br from-[#BFDCDE]/90 to-[#E5F1F2]/80 border border-[#007179]/40 rounded-2xl shadow-xl p-6 mb-6 overflow-hidden group transition-all duration-500">
      <div className="relative z-10 flex justify-between items-center mb-4">
        <div>
          <h1 className={`text-2xl font-bold transition-all duration-500 ${
            isLastQuestion
              ? 'text-[#00383C]'
              : 'text-[#00383C]'
          }`}>
            {isLastQuestion ? '🏆 GOATED RAIFFEISEN QUESTION 🏆' : 'Raiffeisen Developer Quiz'}
          </h1>
          {isLastQuestion && (
            <p className="text-sm font-semibold text-gray-600 mt-1">
              Wenn du die Frage richtig beantwortest gehörst du zu den Besten!!!
            </p>
          )}
        </div>
        <div className="bg-[#007179]/20 backdrop-blur-md border border-[#007179]/30 rounded-2xl p-4">
          <p className="text-xs font-semibold text-[#00383C] uppercase tracking-wider">Spieler</p>
          <p className="font-bold text-lg text-[#007179]">{playerName}</p>
        </div>
      </div>

      <QuizProgressBar
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
      />
    </div>
  );
};

export default QuizHeader;