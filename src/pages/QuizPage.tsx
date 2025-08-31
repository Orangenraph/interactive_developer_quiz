// src/pages/QuizPage.tsx

import React from 'react';

const QuizPage = () => {
  const playerName = localStorage.getItem('quizPlayerName');

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Das Quiz beginnt jetzt!</h1>
      <p>Willkommen, {playerName || 'Spieler'}!</p>
    </div>
  );
};

// Stelle sicher, dass diese Zeile auch hier vorhanden ist:
export default QuizPage;