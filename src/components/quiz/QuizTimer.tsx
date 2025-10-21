// src/components/quiz/QuizTimer.tsx

import React from 'react';
import { Timer } from 'lucide-react';

interface QuizTimerProps {
  timeLeft: number;
  totalTime: number;
}

const QuizTimer: React.FC<QuizTimerProps> = ({ timeLeft, totalTime }) => {
  const percentage = (timeLeft / totalTime) * 100;
  const isLowTime = timeLeft <= 15;

  return (
    <div className="backdrop-blur-xl bg-[#BFDCDE]/70 border border-[#007179]/30 rounded-2xl shadow-lg p-[2vh] mb-[2vh] overflow-hidden group relative">
      {/* Animated gradient orb on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00383C]/0 via-[#007179]/10 to-[#00383C]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>

      <div className="relative z-10 flex items-center gap-[1.5vw]">
        <div className={`flex-shrink-0 w-[clamp(2.5rem,4vw,3rem)] h-[clamp(2.5rem,4vw,3rem)] rounded-2xl backdrop-blur-md ${
          isLowTime 
            ? 'bg-red-500/20 border border-red-500/40' 
            : 'bg-[#007179]/20 border border-[#007179]/40'
        } flex items-center justify-center transition-all duration-300`}>
          <Timer className={`w-[clamp(1.25rem,1.5vw,1.5rem)] h-[clamp(1.25rem,1.5vw,1.5rem)] ${
            isLowTime 
              ? 'text-red-600 animate-pulse' 
              : 'text-[#007179]'
          }`} />
        </div>

        <div className="flex-1">
          <div className="flex justify-between text-[clamp(0.75rem,1vw,0.875rem)] mb-[1vh]">
            <span className="font-semibold text-[#00383C]">Zeit übrig</span>
            <span className={`font-bold text-[clamp(1rem,1.3vw,1.125rem)] ${
              isLowTime 
                ? 'text-red-600' 
                : 'text-[#007179]'
            }`}>
              {timeLeft}s
            </span>
          </div>
          <div className="w-full bg-[#E5F1F2] rounded-full h-[1vh] overflow-hidden border border-[#BFDCDE]/30 backdrop-blur-sm">
            <div
              className={`h-[1vh] rounded-full transition-all duration-1000 ${
                isLowTime 
                  ? 'bg-gradient-to-r from-red-500 to-red-600 shadow-lg shadow-red-500/50' 
                  : 'bg-gradient-to-r from-[#007179] to-[#00383C]'
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