// src/components/questions/MultipleChoiceQuestion.tsx
import React, { useState } from 'react';
import { McQuestion } from '../../data/questions';

// Multiple Choice Component
const MultipleChoiceQuestion = ({ question, onAnswer }: { question: any; onAnswer: (answer: any) => void }) => {
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
                ? 'border-red-500 bg-red-50 text-red-700'
                : 'border-gray-200 hover:border-red-300 hover:bg-gray-50'
            }`}
          >
            <span className="font-medium">{String.fromCharCode(65 + index)})</span> {option}
          </button>
        ))}
      </div>
    </div>
  );
};