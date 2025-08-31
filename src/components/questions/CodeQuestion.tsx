// src/components/quiz/CodeQuestion.tsx

import React, { useState } from 'react';
import { CodeQuestions } from '../../data/questions'

// Code Question Component
export const CodeQuestion = ({ question, onAnswer }: { question: any; onAnswer: (answer: string) => void }) => {
  const [answer, setAnswer] = useState('');

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{question.question}</h3>
      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
        <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
          {question.code}
        </pre>
      </div>
      <div>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Beschreibe den Fehler oder die Lösung..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
          rows={3}
        />
        <button
          onClick={() => onAnswer(answer)}
          disabled={!answer.trim()}
          className="mt-3 bg-red-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
        >
          Antwort absenden
        </button>
      </div>
    </div>
  );
};