// src/components/questions/MultipleChoiceQuestion.tsx

import React, { useState } from 'react';
import { McQuestion } from '../../data/questions';

// Multiple Choice Component
export const MultipleChoiceQuestion = ({ question, onAnswer }: { question: any; onAnswer: (answer: any) => void }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#00383C] mb-4">{question.question}</h3>
      <div className="grid gap-3">
        {question.options.map((option: string, index: number) => (
          <button
            key={index}
            onClick={() => {
              setSelectedOption(index);
              onAnswer(index);
            }}
            className={`p-4 text-left rounded-xl border-2 transition-all duration-300 font-medium group overflow-hidden relative ${
              selectedOption === index
                ? 'border-[#007179] bg-gradient-to-r from-[#007179]/20 to-[#00383C]/10 text-[#00383C] font-bold shadow-lg'
                : 'border-[#BFDCDE]/50 bg-white/30 hover:border-[#007179]/60 hover:bg-white/50 text-[#00383C]'
            }`}
          >
            {/* Animated background on hover/select */}
            <div className={`absolute inset-0 bg-gradient-to-r from-[#007179]/10 to-transparent opacity-0 ${
              selectedOption === index ? 'opacity-100' : 'group-hover:opacity-50'
            } transition-opacity duration-300 pointer-events-none`}></div>

            {/* Content */}
            <div className="relative z-10 flex items-start gap-3">
              <span className="text-[#007179] font-bold text-lg flex-shrink-0">
                {String.fromCharCode(65 + index)})
              </span>
              <span>{option}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};