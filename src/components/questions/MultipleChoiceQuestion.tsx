// src/components/questions/MultipleChoiceQuestion.tsx

import React, { useState } from 'react';
import { McQuestion } from '../../data/questions';

// Multiple Choice Component
export const MultipleChoiceQuestion = ({ question, onAnswer }: { question: any; onAnswer: (answer: any) => void }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{question.question}</h3>
      <div className="grid gap-3">
        {question.options.map((option: string, index: number) => (
          <button
            key={index}
            onClick={() => {
              setSelectedOption(index);
              onAnswer(index);
            }}
            className={`p-4 text-left rounded-lg border-2 transition-all duration-200 ${
              selectedOption === index
                ? 'border-yellow-500 bg-yellow-100 text-yellow-900 font-bold' // <-- Geändert
                : 'border-gray-200 hover:border-yellow-400 hover:bg-yellow-50' // <-- Geändert
            }`}
          >
            <span className="font-medium">{String.fromCharCode(65 + index)})</span> {option}
          </button>
        ))}
      </div>
    </div>
  );
};