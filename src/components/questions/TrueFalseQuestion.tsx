// src/components/questions/TrueFalseQuestion.tsx

import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { TrueFalseQuestion as TrueFalseQuestionType } from '../../data/questions';

// True/False Component
export const TrueFalseQuestion = ({ question, onAnswer }: { question: any; onAnswer: (answer: boolean) => void }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-[#00383C] mb-6">{question.question}</h3>
      <div className="flex gap-4 justify-center">
        {/* WAHR Button */}
        <button
          onClick={() => {
            setSelectedAnswer(true);
            onAnswer(true);
          }}
          className={`px-8 py-4 rounded-xl border-2 font-semibold transition-all duration-300 group overflow-hidden relative flex flex-col items-center ${
            selectedAnswer === true
              ? 'border-[#007179] bg-gradient-to-br from-[#007179]/20 to-[#00383C]/10 text-[#007179] shadow-lg'
              : 'border-[#BFDCDE]/50 bg-white/30 hover:border-[#007179]/60 hover:bg-white/50 text-[#00383C]'
          }`}
        >
          {/* Animated background */}
          <div className={`absolute inset-0 bg-gradient-to-r from-[#007179]/10 to-transparent opacity-0 ${
            selectedAnswer === true ? 'opacity-100' : 'group-hover:opacity-50'
          } transition-opacity duration-300 pointer-events-none`}></div>

          {/* Content */}
          <div className="relative z-10">
            <CheckCircle className={`w-6 h-6 mx-auto mb-2 ${
              selectedAnswer === true ? 'text-[#007179]' : 'text-[#007179]/60 group-hover:text-[#007179]'
            } transition-colors duration-300`} />
            WAHR
          </div>
        </button>

        {/* FALSCH Button */}
        <button
          onClick={() => {
            setSelectedAnswer(false);
            onAnswer(false);
          }}
          className={`px-8 py-4 rounded-xl border-2 font-semibold transition-all duration-300 group overflow-hidden relative flex flex-col items-center ${
            selectedAnswer === false
              ? 'border-red-500 bg-gradient-to-br from-red-500/20 to-red-600/10 text-red-700 shadow-lg'
              : 'border-[#BFDCDE]/50 bg-white/30 hover:border-red-400/60 hover:bg-white/50 text-[#00383C]'
          }`}
        >
          {/* Animated background */}
          <div className={`absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 ${
            selectedAnswer === false ? 'opacity-100' : 'group-hover:opacity-50'
          } transition-opacity duration-300 pointer-events-none`}></div>

          {/* Content */}
          <div className="relative z-10">
            <XCircle className={`w-6 h-6 mx-auto mb-2 ${
              selectedAnswer === false ? 'text-red-600' : 'text-red-500/60 group-hover:text-red-500'
            } transition-colors duration-300`} />
            FALSCH
          </div>
        </button>
      </div>
    </div>
  );
};