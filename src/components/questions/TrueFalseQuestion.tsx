// src/components/questions/TrueFalseQuestion.tsx

import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { TrueFalseQuestion as TrueFalseQuestionType } from '../../data/questions';

// True/False Component
export const TrueFalseQuestion = ({ question, onAnswer }: { question: any; onAnswer: (answer: boolean) => void }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">{question.question}</h3>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => {
            setSelectedAnswer(true);
            onAnswer(true);
          }}
          className={`px-8 py-4 rounded-lg border-2 font-semibold transition-all duration-200 ${
            selectedAnswer === true
              ? 'border-green-500 bg-green-50 text-green-700'
              : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
          }`}
        >
          <CheckCircle className="w-6 h-6 mx-auto mb-2" />
          WAHR
        </button>
        <button
          onClick={() => {
            setSelectedAnswer(false);
            onAnswer(false);
          }}
          className={`px-8 py-4 rounded-lg border-2 font-semibold transition-all duration-200 ${
            selectedAnswer === false
              ? 'border-red-500 bg-red-50 text-red-700'
              : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
          }`}
        >
          <XCircle className="w-6 h-6 mx-auto mb-2" />
          FALSCH
        </button>
      </div>
    </div>
  );
};