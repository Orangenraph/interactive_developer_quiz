// src/pages/StartPage.tsx

import React, { useState } from 'react';
import { ArrowRight, Code } from "lucide-react";
import { useNavigate } from 'react-router-dom'; // 1. useNavigate importieren

const StartPage = () => { // 2. Die 'onStart' Prop wird nicht mehr benötigt
  const [name, setName] = useState('');
  const navigate = useNavigate(); // 3. Den Hook initialisieren

  // 4. Eine Funktion, die den Namen speichert und zur Quiz-Seite navigiert
  const handleStartQuiz = (playerName: string) => {
    if (!playerName.trim()) return;
    // Optional: Den Namen speichern, z.B. im localStorage oder im State einer höheren Komponente (für später)
    localStorage.setItem('quizPlayerName', playerName.trim());
    navigate('/quiz'); // Zur Quiz-Seite weiterleiten
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-red-500 to-red-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full transform hover:scale-105 transition-all duration-300">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Code className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Raiffeisen</h1>
          <h2 className="text-xl font-semibold text-red-600 mb-2">Developer Quiz</h2>
          <p className="text-gray-600">Teste dein Wissen in 10 spannenden Fragen!</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Dein Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Entwickler Name eingeben..."
              onKeyPress={(e) => e.key === 'Enter' && handleStartQuiz(name)}
            />
          </div>

          <button
            onClick={() => handleStartQuiz(name)} // 5. Die neue Funktion aufrufen
            disabled={!name.trim()}
            className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2"
          >
            Quiz starten <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>10 Fragen • 1 Minute pro Frage • Raiffeisen Themed</p>
        </div>
      </div>
    </div>
  );
};

export default StartPage; // 6. Den Default Export hinzufügen