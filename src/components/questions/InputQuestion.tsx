// src/components/questions/MultipleChoiceQuestion.tsx
import React, { useState } from 'react';
import { McQuestion } from '../../data/questions';

// Input Question Component
const InputQuestion = ({ question, onAnswer }: { question: any; onAnswer: (answer: string) => void }) => {
  const [answer, setAnswer] = useState('');

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{question.question}</h3>
      <div>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Deine Antwort..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          onKeyPress={(e) => e.key === 'Enter' && answer.trim() && onAnswer(answer.trim())}
        />
        <button
          onClick={() => onAnswer(answer.trim())}
          disabled={!answer.trim()}
          className="mt-3 bg-red-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
        >
          Antwort absenden
        </button>
      </div>
    </div>
  );
};