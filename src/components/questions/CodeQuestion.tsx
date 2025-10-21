// src/components/quiz/CodeQuestion.tsx

import React, { useState } from 'react';
import { CodeQuestions } from '../../data/questions'

// Code Question Component
export const CodeQuestion = ({ question, onAnswer }: { question: any; onAnswer: (answer: string) => void }) => {
  const [answer, setAnswer] = useState('');

  return (
    <div className="space-y-[2vh]">
      <h3 className="text-[clamp(1.125rem,1.5vw,1.25rem)] font-semibold text-[#00383C] mb-[2vh]">{question.question}</h3>

      {/* Code Block */}
      <div className="bg-[#00383C] rounded-xl p-[2vh] overflow-x-auto border border-[#007179]/30 shadow-lg backdrop-blur-sm">
        <pre className="text-[#BFDCDE] text-[clamp(0.75rem,1vw,0.875rem)] font-mono whitespace-pre-wrap">
          {question.code}
        </pre>
      </div>

      {/* Answer Section */}
      <div>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Beschreibe den Fehler oder die Lösung..."
          className="w-full px-[1.5vw] py-[1.5vh] bg-white/40 backdrop-blur-md border border-[#007179]/30 rounded-xl text-[#00383C] placeholder-[#00383C]/50 focus:ring-2 focus:ring-[#007179]/60 focus:bg-white/50 focus:border-transparent resize-none transition-all duration-200 font-medium text-[clamp(0.875rem,1.1vw,1rem)]"
          rows={3}
        />

        <button
          onClick={() => onAnswer(answer)}
          disabled={!answer.trim()}
          className="mt-[1.5vh] w-full relative group/btn overflow-hidden rounded-xl py-[1.5vh] px-[2vw] font-bold text-white transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl text-[clamp(0.875rem,1.1vw,1rem)]"
        >
          {/* Button background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00383C] via-[#007179] to-[#00383C] opacity-100 group-hover/btn:opacity-90 transition-opacity duration-300 disabled:opacity-50"></div>

          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-full group-hover/btn:translate-x-0 transition-transform duration-700 disabled:opacity-0"></div>

          {/* Button content */}
          <div className="relative flex items-center justify-center">
            Antwort absenden
          </div>
        </button>
      </div>
    </div>
  );
};