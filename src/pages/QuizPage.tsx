// src/pages/QuizPage.tsx

import React, { useState, useEffect, useRef } from 'react';
import { Trophy } from 'lucide-react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/questions';
import { QuestionRenderer } from '../components/questions/QuestionRenderer';
import { WinnerAnimation } from '../components/results/WinnerAnimation';
import ResultPage from './ResultPage';

// NEU: Importiere die neuen Komponenten
import QuizProgressBar from '../components/quiz/QuizProgressBar';
import QuizTimer from '../components/quiz/QuizTimer';

interface QuizState {
  currentQuestionIndex: number;
  timeLeft: number;
  score: number;
  isComplete: boolean;
  answers: (string | number | boolean)[];
  showWinnerAnimation: boolean;
  lastQuestionCorrect: boolean;
}

const QuizPage = () => {
  const playerName = 'Spieler';
  const TOTAL_TIME_PER_QUESTION = 60; // Konstante für die Zeit

  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    timeLeft: TOTAL_TIME_PER_QUESTION,
    score: 0,
    isComplete: false,
    answers: [],
    showWinnerAnimation: false,
    lastQuestionCorrect: false
  });

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isTimerActive, setIsTimerActive] = useState(true);

  // Timer Logic (bleibt hier, da es den App-Status steuert)
  useEffect(() => {
    if (isTimerActive && quizState.timeLeft > 0 && !quizState.isComplete) {
      timerRef.current = setTimeout(() => {
        setQuizState(prev => ({
          ...prev,
          timeLeft: prev.timeLeft - 1
        }));
      }, 1000);
    } else if (quizState.timeLeft === 0) {
      handleTimeUp();
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [quizState.timeLeft, isTimerActive, quizState.isComplete]);

  const handleTimeUp = () => {
    setQuizState(prev => ({
      ...prev,
      lastQuestionCorrect: false,
      isComplete: true
    }));
  };

  const handleAnswer = (answer: any) => {
    setIsTimerActive(false);

    const currentQuestion = QUIZ_QUESTIONS[quizState.currentQuestionIndex];
    const isCorrect = checkAnswer(currentQuestion, answer);

    const newAnswers = [...quizState.answers, answer];
    const newScore = isCorrect ? quizState.score + 1 : quizState.score;

    setQuizState(prev => ({
      ...prev,
      answers: newAnswers,
      score: newScore,
      lastQuestionCorrect: isCorrect
    }));

    if (!isCorrect) {
      setTimeout(() => {
        setQuizState(prev => ({
          ...prev,
          isComplete: true
        }));
      }, 1500);
      return;
    }

    if (quizState.currentQuestionIndex === QUIZ_QUESTIONS.length - 1 && isCorrect) {
      setTimeout(() => {
        setQuizState(prev => ({
          ...prev,
          showWinnerAnimation: true,
          isComplete: true
        }));
      }, 1500);
    } else {
      setTimeout(() => {
        nextQuestion();
      }, 1500);
    }
  };

  const checkAnswer = (question: QuizQuestion, answer: any): boolean => {
    switch (question.type) {
      case 'mc':
        return answer === question.correct;
      case 'truefalse':
        return answer === question.correct;
      case 'code':
      case 'input':
        return answer.toLowerCase().includes(question.correct.toLowerCase()) ||
               question.correct.toLowerCase().includes(answer.toLowerCase());
      default:
        return false;
    }
  };

  const nextQuestion = () => {
    setQuizState(prev => ({
      ...prev,
      currentQuestionIndex: prev.currentQuestionIndex + 1,
      timeLeft: TOTAL_TIME_PER_QUESTION
    }));
    setIsTimerActive(true);
  };

  // Restliche Funktionen (finishQuiz, navigateToStart, resetQuiz) bleiben unverändert...
  const finishQuiz = () => { /* ... */ };
  const navigateToStart = () => { window.location.href = '/'; };
  const resetQuiz = () => { /* ... */ };


  const currentQuestion = QUIZ_QUESTIONS[quizState.currentQuestionIndex];
  const isLastQuestion = quizState.currentQuestionIndex === QUIZ_QUESTIONS.length - 1;
  // ENTFERNT: const percentage = (quizState.timeLeft / 60) * 100;
  // ENTFERNT: const isLowTime = quizState.timeLeft <= 15;


  if (quizState.isComplete && !quizState.showWinnerAnimation) {
    return (
      <ResultPage
        playerName={playerName}
        score={quizState.score}
        totalQuestions={QUIZ_QUESTIONS.length}
        onBackToStart={navigateToStart}
        lastQuestionCorrect={quizState.lastQuestionCorrect}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 p-4">
      {quizState.showWinnerAnimation && (
        <WinnerAnimation
          playerName={playerName}
          onBackToStart={navigateToStart}
        />
      )}

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl shadow-lg p-6 mb-6 text-black">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold">
                Raiffeisen Developer Quiz
              </h1>
              <p className="text-sm opacity-80">Developer Conference 2025</p>
            </div>
            <div className="text-right bg-white bg-opacity-20 rounded-lg p-3">
              <p className="text-sm font-medium">Spieler</p>
              <p className="font-bold text-lg">{playerName}</p>
            </div>
          </div>

          <QuizProgressBar
            currentQuestion={quizState.currentQuestionIndex + 1}
            totalQuestions={QUIZ_QUESTIONS.length}
          />
        </div>

        <QuizTimer
          timeLeft={quizState.timeLeft}
          totalTime={TOTAL_TIME_PER_QUESTION}
        />

        {/* Question Card */}
        <div className="bg-white border-2 border-yellow-400 rounded-xl shadow-lg p-8">
          {isLastQuestion && (
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-4 rounded-lg mb-6 text-center border-2 border-black">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Trophy className="w-6 h-6" />
                <span className="font-bold text-lg">🏦 GOATED RAIFFEISEN QUESTION 🏦</span>
                <Trophy className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium">Die finale Banking-Challenge! 🔥💰</p>
            </div>
          )}

          <QuestionRenderer
            question={currentQuestion}
            onAnswer={handleAnswer}
            key={quizState.currentQuestionIndex}
          />
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <div className="bg-yellow-400 inline-block px-6 py-2 rounded-full">
            <p className="text-sm font-medium text-black">
              Made by innovAIte
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;