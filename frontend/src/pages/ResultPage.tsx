// src/pages/ResultPage.tsx

import React from 'react';
import { Trophy } from 'lucide-react';
import { LoserAnimation } from '../components/results/LoserAnimation';
import QuizPage from "./QuizPage";

interface ResultPageProps {
  playerName: string;
  score: number;
  totalQuestions: number;
  onBackToStart: () => void;
  lastQuestionCorrect?: boolean;
}

const ResultPage = ({ playerName, score, totalQuestions, onBackToStart, lastQuestionCorrect = true }: ResultPageProps) => {

  // Wenn die letzte Frage falsch war, zeige die Loser Animation
  if (!lastQuestionCorrect) {
    return (
      <LoserAnimation
        playerName={playerName}
        onBackToStart={onBackToStart}
      />
    );
  }
  const getScoreMessage = () => {
    const percentage = (score / totalQuestions) * 100;

    if (percentage === 100) {
      return "Perfekt! Du bist ein echter Raiffeisen Dev! 🔥";
    } else if (percentage >= 80) {
      return "Excellent! Du kennst dich richtig gut aus! 💪";
    } else if (percentage >= 60) {
      return "Gut gemacht! Solide Performance! 👍";
    } else if (percentage >= 40) {
      return "Nicht schlecht! Da geht aber noch mehr! 😊";
    } else {
      return "Das war ein Anfang! Beim nächsten Mal wird's besser! 💪";
    }
  };

  const getScoreColor = () => {
    const percentage = (score / totalQuestions) * 100;

    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center">
        <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />

        <h1 className="text-3xl font-bold text-gray-800 mb-4">Quiz Beendet!</h1>

        <p className="text-xl text-gray-600 mb-6">
          Glückwunsch {playerName}!
        </p>

        <div className="bg-red-50 rounded-lg p-6 mb-6">
          <div className={`text-3xl font-bold mb-2 ${getScoreColor()}`}>
            {score} / {totalQuestions}
          </div>
          <p className="text-gray-600 mb-3">Richtige Antworten</p>
          <p className="text-sm text-gray-700 font-medium">
            {getScoreMessage()}
          </p>
        </div>

        {/* Raiffeisen Branding */}
        <div className="border-t border-gray-200 pt-6 mb-6">
          <p className="text-sm text-gray-500 mb-2">
            Raiffeisen Developer Conference 2025
          </p>
          <p className="text-xs text-gray-400">
            Vielen Dank fürs Mitspielen! 🎯
          </p>
        </div>

        <button
          onClick={onBackToStart}
          className="bg-red-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 w-full"
        >
          Zurück zum Start
        </button>
      </div>
    </div>
  );
};

export default ResultPage;