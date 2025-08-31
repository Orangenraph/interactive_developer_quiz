// src/pages/StartPage.tsx

import React, { useState } from 'react';
import { ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

import RaiffeisenLogo from '../assets/Raiffeisen_Österreich_logo.png';

const StartPage = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleStartQuiz = (playerName: string) => {
    if (!playerName.trim()) return;
    localStorage.setItem('quizPlayerName', playerName.trim());
    navigate('/quiz');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">

      {/* Hintergrund */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF27A] via-[#FFD800] to-[#FFC000]"/>

      {/* Inhalt */}
      <div
          className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full transform hover:scale-105 transition-all duration-300 border-t-4 border-[#FFD800]">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-[#FFD800] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <img src={RaiffeisenLogo} alt="Raiffeisen Logo" className="w-full h-full object-contain"/>
          </div>
          <h1 className="text-3xl font-bold text-black mb-2">Raiffeisen</h1>
          <h2 className="text-xl font-semibold text-black mb-2">Developer Quiz</h2>
          <p className="text-gray-700">Teste dein Wissen in 10 spannenden Fragen!</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Dein Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border-2 border-black rounded-xl focus:ring-2 focus:ring-[#FFD800] focus:border-[#FFD800] transition-all duration-200"
              placeholder="Entwickler Name eingeben..."
              onKeyPress={(e) => e.key === 'Enter' && handleStartQuiz(name)}
            />
          </div>

          <button
            onClick={() => handleStartQuiz(name)}
            disabled={!name.trim()}
            className="w-full bg-black text-[#FFD800] py-3 px-6 rounded-xl font-bold hover:bg-[#1a1a1a] disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Quiz starten <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>10 Fragen • 1 Minute pro Frage</p>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
