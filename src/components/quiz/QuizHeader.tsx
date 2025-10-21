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
    <div className="w-full text-white py-[4vh]" style={{
      background: '#007179',
      borderBottomLeftRadius: '8vw'
    }}>
      <div className="max-w-6xl mx-auto px-[2vw]">
        {/* Title and Player */}
        <div className="flex justify-between items-start flex-wrap gap-[2vw] mb-[3vh]">
          <div>
            <h1 className={`text-[clamp(1.5rem,2.5vw,2rem)] font-bold mb-[1vh] transition-all duration-500 ${
              isLastQuestion
                ? 'text-white'
                : 'text-white'
            }`}>
              {isLastQuestion ? '🏆 GOATED RAIFFEISEN QUESTION 🏆' : 'Raiffeisen Developer Quiz'}
            </h1>
            {isLastQuestion && (
              <p className="text-[clamp(0.75rem,1vw,0.875rem)] font-semibold text-[#B0DDDF] mt-[0.5vh]">
                Wenn du die Frage richtig beantwortest gehörst du zu den Besten!!!
              </p>
            )}
          </div>
          <div className="text-right">
            <p className="text-[clamp(0.75rem,1vw,0.875rem)] text-[#B0DDDF] mb-[0.5vh]">Spieler</p>
            <p className="text-[clamp(1.125rem,1.5vw,1.25rem)] font-semibold text-white">{playerName}</p>
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