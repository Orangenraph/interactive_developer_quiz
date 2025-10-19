// src/pages/StartPage.tsx

import React, { useState, useEffect } from 'react';
import { ArrowRight, Trophy } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import PixelBlast from '../utils/PixelBlast';
import DevGoat_Sticker from '../assets/DevGoat_Sticker.png';

const StartPage = () => {
  const [name, setName] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleStartQuiz = (playerName: string) => {
    if (!playerName.trim()) return;
    localStorage.setItem('quizPlayerName', playerName.trim());
    navigate('/quiz');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">

      {/* PixelBlast Hintergrund */}
      <div className="absolute inset-0 w-full h-full">
        <PixelBlast
          variant="square"
          pixelSize={2}
          color="#BFDCDE"
          patternScale={1.5}
          patternDensity={3}
          pixelSizeJitter={0}
          speed={2}
          edgeFade={0.2}
          enableRipples
        />
      </div>

      {/* Inhalt */}
      <div className="relative w-full max-w-md group">
        {/* Liquid gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/20 rounded-3xl blur-xl opacity-60"></div>

        {/* Main container */}
        <div className="relative backdrop-blur-xl bg-[#BFDCDE]/70 border border-[#007179]/30 rounded-3xl shadow-2xl p-8 overflow-hidden transition-all duration-300">

          {/* Animated gradient orb that follows cursor */}
          <div
            className="absolute -inset-px bg-gradient-to-r from-[#00383C]/0 via-[#007179]/20 to-[#00383C]/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 113, 121, 0.2), transparent 80%)`
            }}
          ></div>

          {/* Content */}
          <div className="relative z-10">
            <div className="relative mb-8">
              {/* Leaderboard Button - Top Right Corner */}
              <button
                onClick={() => navigate('/leaderboard')}
                className="absolute top-0 right-0 group/lb backdrop-blur-xl bg-[#BFDCDE]/60 border border-[#007179]/30 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#BFDCDE]/80"
              >
                <Trophy className="w-6 h-6 text-[#007179] group-hover/lb:text-[#00383C] transition-colors duration-300" />
              </button>

              <div className="text-center">
                <div className="w-48 h-48 flex items-center justify-center mx-auto mb-6 rounded-2xl backdrop-blur-md bg-white/20 border border-[#007179]/20 shadow-lg">
                  <img src={DevGoat_Sticker} alt="DevGoat Sticker" className="w-full h-full object-contain"/>
                </div>
                <h1 className="text-4xl font-bold text-[#00383C] mb-2">RSG DevCon</h1>
                <h2 className="text-3xl font-semibold text-[#007179] mb-2">Developer Quiz</h2>
                <p className="text-[#00383C]/70">Teste dein Wissen in 10 spannenden Fragen!</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="px-1 block text-sm font-medium text-[#00383C] mb-2">Vorname, Nachname</label>
                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Entwickler Name eingeben..."
                    onKeyPress={(e) => e.key === 'Enter' && handleStartQuiz(name)}
                    className="w-full px-4 py-3 rounded-xl backdrop-blur-md bg-white/30 border border-[#007179]/30 text-[#00383C] placeholder-[#00383C]/40 focus:outline-none focus:ring-2 focus:ring-[#007179]/60 focus:bg-white/40 transition-all duration-200 font-medium"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#007179]/0 via-white/0 to-[#007179]/0 opacity-0 hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              <button
                onClick={() => handleStartQuiz(name)}
                disabled={!name.trim()}
                className="w-full relative group/btn overflow-hidden rounded-xl py-3 px-6 font-bold text-white transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                {/* Button background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00383C] via-[#007179] to-[#00383C] opacity-100 group-hover/btn:opacity-90 transition-opacity duration-300"></div>

                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-full group-hover/btn:translate-x-0 transition-transform duration-700"></div>

                {/* Button content */}
                <div className="relative flex items-center justify-center gap-2">
                  <span>Quiz starten</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-[#00383C]/60 border-t border-[#007179]/20 pt-4">
              <p>10 Fragen • 1 Minute pro Frage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;