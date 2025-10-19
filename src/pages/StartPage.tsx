// src/pages/StartPage.tsx

import React, { useState } from 'react';
import { ArrowRight } from "lucide-react";
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

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">

      {/* PixelBlast Hintergrund */}
      <div className="absolute inset-0 w-full h-full">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#BFDCDE"
          patternScale={2}
          patternDensity={1.5}
          pixelSizeJitter={0}
          speed={1.5}
          edgeFade={0.2}
          enableRipples
        />
      </div>

      {/* Inhalt */}
      <div
          className="relative bg-[#BFDCDE] rounded-2xl shadow-2xl p-8 max-w-md w-full transition-all duration-300">
        <div className="text-center mb-8">
          <div className="w-48 h-48 flex items-center justify-center mx-auto">
            <img src={DevGoat_Sticker} alt="DevGoat Sticker" className="w-full h-full object-contain"/>
          </div>
          <h1 className="text-4xl font-bold text-black mb-2">RSG DevCon</h1>
          <h2 className="text-3xl font-semibold text-black mb-2">Developer Quiz</h2>
          <p className="text-gray-700">Teste dein Wissen in 10 spannenden Fragen!</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="px-1 block text-sm font-medium text-black mb-2">Vorname, Nachname</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl transition-all duration-200"
              placeholder="Entwickler Name eingeben..."
              onKeyPress={(e) => e.key === 'Enter' && handleStartQuiz(name)}
            />
          </div>

          <button
            onClick={() => handleStartQuiz(name)}
            disabled={!name.trim()}
            className="w-full text-white py-3 px-6 rounded-xl font-bold
            disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed
            flex items-center justify-center gap-2 shadow-lg hover:shadow-xl
            relative z-10 overflow-hidden
            bg-[linear-gradient(to_right,#338d94_50%,#007179_50%)]
            bg-[length:210%]
            bg-right
            hover:bg-left
            !transition-[background-position] duration-4000
            "
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