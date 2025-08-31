// src/components/results/LoserAnimation.tsx

import React from 'react';
import { XCircle, RefreshCw, TrendingDown, AlertTriangle } from 'lucide-react';

interface LoserAnimationProps {
  playerName: string;
  onBackToStart: () => void;
}

export const LoserAnimation = ({ playerName, onBackToStart }: LoserAnimationProps) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-600 via-red-600 to-red-800 flex items-center justify-center z-50">
      <div className="text-center text-white animate-pulse">
        <div className="flex justify-center mb-6">
          <XCircle className="w-32 h-32 text-red-300 animate-bounce" />
        </div>
        <h1 className="text-5xl font-bold mb-4 animate-shake">💥 GAME OVER! 💥</h1>
        <p className="text-2xl mb-4">Schade {playerName}!</p>
        <p className="text-xl mb-2">Eine falsche Antwort und du bist raus! 😅</p>
        <p className="text-lg text-red-200">Bei Raiffeisen zählt Präzision - versuch's nochmal!</p>

        <div className="flex justify-center gap-4 mt-6">
          <TrendingDown className="w-8 h-8 text-red-300 animate-bounce" />
          <AlertTriangle className="w-8 h-8 text-red-300 animate-bounce" style={{ animationDelay: '0.2s' }} />
          <RefreshCw className="w-8 h-8 text-red-300 animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>

        <button
          onClick={onBackToStart}
          className="mt-8 bg-white text-red-600 py-3 px-8 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors"
        >
          Zurück zum Start
        </button>
      </div>
    </div>
  );
};