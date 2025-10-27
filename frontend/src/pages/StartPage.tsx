// src/pages/StartPage.tsx

import React, { useState, useEffect } from 'react';
import { ArrowRight, Trophy } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import PixelBlast from '../utils/PixelBlast';
import DevGoat_Sticker from '../assets/DevGoat_Sticker.png'

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
      <div className="w-full text-white py-[2vh]" style={{
        background: '#007179',
        borderBottomLeftRadius: '8vw'
      }}>
        <div className="max-w-6xl mx-auto px-[2vw] flex justify-between items-center">
          <div>
            <h1 className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold">RSG DevCon</h1>
            <p className="text-[#B0DDDF] text-[clamp(0.75rem,1vw,0.875rem)] mt-[0.5vh]">Developer Quiz</p>
          </div>
          <button
            onClick={() => navigate('/leaderboard')}
            className="flex items-center gap-[0.5vw] px-[1.5vw] py-[1vh] bg-white text-[#007179] rounded-lg hover:bg-[#B0DDDF] transition-colors font-medium text-[clamp(0.875rem,1vw,1rem)]"
          >
            <Trophy className="w-[clamp(1rem,1.2vw,1.25rem)] h-[clamp(1rem,1.2vw,1.25rem)]" />
            Leaderboard
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-[2vw] py-[6vh]">
        <div className="max-w-md mx-auto">
          {/* Card */}
          <div className="bg-white border-2 border-[#007179] rounded-2xl shadow-lg p-[3vh]">
            {/* Sticker */}
            <div className="w-[clamp(10rem,20vw,12rem)] h-[clamp(10rem,20vw,12rem)] flex items-center justify-center mx-auto mb-[2vh] rounded-2xl border-2 border-[#007179]/20 bg-gradient-to-br from-[#E5F1F2] to-[#BFDCDE]">
              <img src={DevGoat_Sticker} alt="DevGoat Sticker" className="w-full h-full object-contain"/>
            </div>

            {/* Title */}
            <div className="text-center mb-[3vh]">
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#00383C] mb-[1vh]">Developer Quiz</h2>
              <p className="text-[#00383C]/70 text-[clamp(0.875rem,1.2vw,1.125rem)]">Teste dein Wissen in 10 spannenden Fragen!</p>
              <p className="text-[#007179] text-[clamp(0.875rem,1.2vw,1.125rem)] font-semibold mt-[1vh]">10 Fragen • 1 Minute pro Frage</p>
            </div>

            {/* Form */}
            <div className="space-y-[1.5vh] mb-[2vh]">
              <div>
                <label className="block text-[clamp(0.75rem,1vw,0.875rem)] font-medium text-[#00383C] mb-[1vh]">Vorname, Nachname</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Entwickler Name eingeben..."
                  onKeyPress={(e) => e.key === 'Enter' && handleStartQuiz(name)}
                  className="w-full px-[1.5vw] py-[1.5vh] rounded-lg border-2 border-[#007179]/30 text-[#00383C] placeholder-[#00383C]/40 focus:outline-none focus:border-[#007179] focus:ring-2 focus:ring-[#007179]/20 transition-all duration-200 font-medium text-[clamp(0.875rem,1.1vw,1rem)]"
                />
              </div>

              <button
                onClick={() => handleStartQuiz(name)}
                disabled={isButtonDisabled}
                className="w-full relative group/btn overflow-hidden rounded-lg py-[1.5vh] px-[2vw] font-bold text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-[0.5vw] shadow-lg hover:shadow-xl text-[clamp(0.875rem,1.1vw,1rem)]"
                style={{
                  background: isButtonDisabled ? '#cccccc' : '#007179'
                }}
              >
                {/* Hover effect */}
                <div className="absolute inset-0 bg-[#00383C] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>

                {/* Button content */}
                <div className="relative flex items-center justify-center gap-[0.5vw]">
                  <span>Quiz starten</span>
                  <ArrowRight className="w-[clamp(1rem,1.2vw,1.25rem)] h-[clamp(1rem,1.2vw,1.25rem)] group-hover/btn:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </div>

            {/* Footer */}
            <div className="text-center text-[clamp(0.625rem,0.8vw,0.75rem)] text-[#00383C]/60 border-t border-[#007179]/20 pt-[1.5vh]">
              <p>© Made by innovAIte</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;