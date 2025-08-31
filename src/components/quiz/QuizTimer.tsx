// src/components/quiz/QuizTimer.tsx
import React from 'react';
import { Timer } from 'lucide-react';

// Timer Component
const QuizTimer = ({ timeLeft, totalTime }: { timeLeft: number; totalTime: number }) => {
  const percentage = (timeLeft / totalTime) * 100;
  const isLowTime = timeLeft <= 15;

  return (
    <div className="flex items-center gap-3 mb-6">
      <Timer className={`w-6 h-6 ${isLowTime ? 'text-red-500 animate-pulse' : 'text-gray-600'}`} />
      <div className="flex-1">
        <div className="flex justify-between text-sm mb-1">
          <span className="font-medium">Zeit übrig</span>
          <span className={`font-bold ${isLowTime ? 'text-red-500' : 'text-gray-700'}`}>
            {timeLeft}s
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-1000 ${
              isLowTime ? 'bg-red-500' : 'bg-green-500'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};