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
    <div className="w-full text-white py-12 mb-12" style={{
      background: '#007179',
      borderBottomLeftRadius: '120px'
    }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Back Button */}
        <div className="mb-6">
          <a href="/" className="inline-flex items-center gap-2 text-white hover:text-[#B0DDDF] transition-colors">
            <span className="text-xl">←</span>
            <span>Zurück</span>
          </a>
        </div>

        {/* Title and Player */}
        <div className="flex justify-between items-start flex-wrap gap-4 mb-6">
          <div>
            <h1 className={`text-3xl font-bold mb-2 transition-all duration-500 ${
              isLastQuestion
                ? 'text-white'
                : 'text-white'
            }`}>
              {isLastQuestion ? '🏆 GOATED RAIFFEISEN QUESTION 🏆' : 'Raiffeisen Developer Quiz'}
            </h1>
            {isLastQuestion && (
              <p className="text-sm font-semibold text-[#B0DDDF] mt-1">
                Wenn du die Frage richtig beantwortest gehörst du zu den Besten!!!
              </p>
            )}
          </div>
          <div className="text-right">
            <p className="text-sm text-[#B0DDDF] mb-1">Spieler</p>
            <p className="text-xl font-semibold text-white">{playerName}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <QuizProgressBar
          currentQuestion={currentQuestion}
          totalQuestions={totalQuestions}
        />
      </div>
    </div>
  );
};

export default QuizHeader;