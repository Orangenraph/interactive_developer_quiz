// src/pages/StartPage.tsx

import React, { useState, useEffect } from 'react';
import { ArrowRight, Trophy } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import PixelBlast from '../utils/PixelBlast';
import DevGoat_Sticker from '../assets/DevGoat_Sticker.png';

const StartPage = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleStartQuiz = (playerName: string) => {
    if (!playerName.trim()) return;
    localStorage.setItem('quizPlayerName', playerName.trim());
    navigate('/quiz');
  };

  const isButtonDisabled = !name.trim();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="w-full text-white py-8" style={{
        background: '#007179',
        borderBottomLeftRadius: '120px'
      }}>
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">RSG DevCon</h1>
            <p className="text-[#B0DDDF] text-sm mt-1">Developer Quiz</p>
          </div>
          <button
            onClick={() => navigate('/leaderboard')}
            className="flex items-center gap-2 px-4 py-2 bg-white text-[#007179] rounded-lg hover:bg-[#B0DDDF] transition-colors font-medium"
          >
            <Trophy className="w-5 h-5" />
            Leaderboard
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          {/* Card */}
          <div className="bg-white border-2 border-[#007179] rounded-2xl shadow-lg p-8">
            {/* Sticker */}
            <div className="w-48 h-48 flex items-center justify-center mx-auto mb-6 rounded-2xl border-2 border-[#007179]/20 bg-gradient-to-br from-[#E5F1F2] to-[#BFDCDE]">
              <img src={DevGoat_Sticker} alt="DevGoat Sticker" className="w-full h-full object-contain"/>
            </div>

            {/* Title */}
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-[#00383C] mb-2">Developer Quiz</h2>
              <p className="text-[#00383C]/70 text-1xl">Teste dein Wissen in 10 spannenden Fragen!</p>
              <p className="text-[#007179] text-1xl font-semibold mt-2">10 Fragen • 1 Minute pro Frage</p>
            </div>

            {/* Form */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-[#00383C] mb-2">Vorname, Nachname</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Entwickler Name eingeben..."
                  onKeyPress={(e) => e.key === 'Enter' && handleStartQuiz(name)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#007179]/30 text-[#00383C] placeholder-[#00383C]/40 focus:outline-none focus:border-[#007179] focus:ring-2 focus:ring-[#007179]/20 transition-all duration-200 font-medium"
                />
              </div>

              <button
                onClick={() => handleStartQuiz(name)}
                disabled={isButtonDisabled}
                className="w-full relative group/btn overflow-hidden rounded-lg py-3 px-6 font-bold text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                style={{
                  background: isButtonDisabled ? '#cccccc' : '#007179'
                }}
              >
                {/* Hover effect */}
                <div className="absolute inset-0 bg-[#00383C] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>

                {/* Button content */}
                <div className="relative flex items-center justify-center gap-2">
                  <span>Quiz starten</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </div>

            {/* Footer */}
            <div className="text-center text-xs text-[#00383C]/60 border-t border-[#007179]/20 pt-4">
              <p>© Made by innovAIte</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;