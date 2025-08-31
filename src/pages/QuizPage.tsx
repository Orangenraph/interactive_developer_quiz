// src/pages/QuizPage.tsx

import React, { useState, useEffect, useRef } from 'react';
import { Timer, Trophy } from 'lucide-react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/questions';
import { QuestionRenderer } from '../components/questions/QuestionRenderer';
import { WinnerAnimation } from '../components/results/WinnerAnimation';
import ResultPage from './ResultPage';

interface QuizState {
  currentQuestionIndex: number;
  timeLeft: number;
  score: number;
  isComplete: boolean;
  answers: (string | number | boolean)[];
  showWinnerAnimation: boolean;
}

const QuizPage = () => {
  const playerName = 'Spieler'; // localStorage entfernt da nicht unterstützt

  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    timeLeft: 60,
    score: 0,
    isComplete: false,
    answers: [],
    showWinnerAnimation: false
  });

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isTimerActive, setIsTimerActive] = useState(true);

  // Timer Logic
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
    // Zeit abgelaufen - zur nächsten Frage
    if (quizState.currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      nextQuestion();
    } else {
      finishQuiz();
    }
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
      score: newScore
    }));

    // Wenn es die letzte Frage ist und richtig beantwortet wurde
    if (quizState.currentQuestionIndex === QUIZ_QUESTIONS.length - 1 && isCorrect) {
      setTimeout(() => {
        setQuizState(prev => ({
          ...prev,
          showWinnerAnimation: true,
          isComplete: true
        }));
      }, 1500);
    } else {
      // Zur nächsten Frage nach kurzer Pause
      setTimeout(() => {
        if (quizState.currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
          nextQuestion();
        } else {
          finishQuiz();
        }
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
        // Einfache String-Vergleichslogik (kann erweitert werden)
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
      timeLeft: 60
    }));
    setIsTimerActive(true);
  };

  const finishQuiz = () => {
    setQuizState(prev => ({
      ...prev,
      isComplete: true
    }));
  };

  const resetQuiz = () => {
    setQuizState({
      currentQuestionIndex: 0,
      timeLeft: 60,
      score: 0,
      isComplete: false,
      answers: [],
      showWinnerAnimation: false
    });
    setIsTimerActive(true);
  };

  const currentQuestion = QUIZ_QUESTIONS[quizState.currentQuestionIndex];
  const isLastQuestion = quizState.currentQuestionIndex === QUIZ_QUESTIONS.length - 1;
  const percentage = (quizState.timeLeft / 60) * 100;
  const isLowTime = quizState.timeLeft <= 15;

  // Quiz Complete Screen
  if (quizState.isComplete && !quizState.showWinnerAnimation) {
    return (
      <ResultPage
        playerName={playerName}
        score={quizState.score}
        totalQuestions={QUIZ_QUESTIONS.length}
        onNewGame={resetQuiz}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 p-4">
      {quizState.showWinnerAnimation && (
        <WinnerAnimation
          playerName={playerName}
          onNewGame={resetQuiz}
        />
      )}

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Raiffeisen Developer Quiz
            </h1>
            <div className="text-right">
              <p className="text-sm text-gray-600">Spieler</p>
              <p className="font-semibold text-red-600">{playerName}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Frage {quizState.currentQuestionIndex + 1} von {QUIZ_QUESTIONS.length}</span>
            <span>Score: {quizState.score}/{quizState.currentQuestionIndex}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-red-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((quizState.currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Timer */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3">
            <Timer className={`w-6 h-6 ${isLowTime ? 'text-red-500 animate-pulse' : 'text-gray-600'}`} />
            <div className="flex-1">
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">Zeit übrig</span>
                <span className={`font-bold ${isLowTime ? 'text-red-500' : 'text-gray-700'}`}>
                  {quizState.timeLeft}s
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all duration-1000 ${
                    isLowTime ? 'bg-red-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {isLastQuestion && (
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-lg mb-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Trophy className="w-6 h-6" />
                <span className="font-bold text-lg">GOATED QUESTION</span>
                <Trophy className="w-6 h-6" />
              </div>
              <p className="text-sm">Die finale Herausforderung! 🔥</p>
            </div>
          )}

          <QuestionRenderer
            question={currentQuestion}
            onAnswer={handleAnswer}
          />
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Raiffeisen Developer Conference 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;