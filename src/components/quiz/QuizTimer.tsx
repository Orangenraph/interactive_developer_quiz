// src/components/quiz/QuizTimer.tsx

import React from 'react';
import { Timer } from 'lucide-react';

interface QuizTimerProps {
  timeLeft: number;
  totalTime: number; // Wir übergeben die Gesamtzeit für die Prozentberechnung
}

const QuizTimer: React.FC<QuizTimerProps> = ({ timeLeft, totalTime }) => {
  const percentage = (timeLeft / totalTime) * 100;
  const isLowTime = timeLeft <= 15;

  return (
    <div className="bg-white border-2 border-yellow-400 rounded-xl shadow-lg p-6 mb-6">
      <div className="flex items-center gap-3">
        <Timer className={`w-6 h-6 ${isLowTime ? 'text-red-500 animate-pulse' : 'text-yellow-600'}`} />
        <div className="flex-1">
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium text-gray-800">Zeit übrig</span>
            <span className={`font-bold ${isLowTime ? 'text-red-500' : 'text-yellow-600'}`}>
              {timeLeft}s
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className={`h-3 rounded-full transition-all duration-1000 ${
                isLowTime ? 'bg-red-500' : 'bg-yellow-500'
              }`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizTimer;