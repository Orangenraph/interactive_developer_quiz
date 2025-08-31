// src/components/results/WinnerAnimation.tsx

import React from 'react';
import { Trophy, Star, Zap, Award } from 'lucide-react';

interface WinnerAnimationProps {
  playerName: string;
  onBackToStart: () => void;
}

export const WinnerAnimation = ({ playerName, onBackToStart }: WinnerAnimationProps) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 flex items-center justify-center z-50">
      <div className="text-center text-white animate-bounce">
        <div className="flex justify-center mb-6">
          <Trophy className="w-32 h-32 text-yellow-300 animate-spin" />
        </div>
        <h1 className="text-6xl font-bold mb-4 animate-pulse">🏆 GOATED! 🏆</h1>
        <p className="text-2xl mb-4">Glückwunsch {playerName}!</p>
        <p className="text-xl">Du hast die GOATED Question gelöst!</p>
        <div className="flex justify-center gap-4 mt-6">
          <Star className="w-8 h-8 text-yellow-300 animate-ping" />
          <Zap className="w-8 h-8 text-yellow-300 animate-ping" style={{ animationDelay: '0.2s' }} />
          <Award className="w-8 h-8 text-yellow-300 animate-ping" style={{ animationDelay: '0.4s' }} />
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