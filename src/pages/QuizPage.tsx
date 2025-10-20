// src/pages/QuizPage.tsx

import React, { useState, useEffect, useRef } from 'react';
import { Trophy } from 'lucide-react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/questions';
import { QuestionRenderer } from '../components/questions/QuestionRenderer';
import { WinnerAnimation } from '../components/results/WinnerAnimation';
import ResultPage from './ResultPage';
import { PlayerStorage } from '../services/PlayerStorage';
import QuizHeader from '../components/quiz/QuizHeader';
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
  const playerName = localStorage.getItem('quizPlayerName') || 'Goaty';
  const TOTAL_TIME_PER_QUESTION = 60;
  const startTimeRef = useRef<number>(Date.now());

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
      // Player failed - save result and complete quiz
      setTimeout(() => {
        saveQuizResult(playerName, newScore, false);
        setQuizState(prev => ({
          ...prev,
          isComplete: true
        }));
      }, 1500);
      return;
    }

    if (quizState.currentQuestionIndex === QUIZ_QUESTIONS.length - 1 && isCorrect) {
      // Player completed all questions - save result and show winner animation
      setTimeout(() => {
        saveQuizResult(playerName, newScore, true);
        setQuizState(prev => ({
          ...prev,
          showWinnerAnimation: true,
          isComplete: true
        }));
      }, 1500);
    } else {
      // Continue to next question
      setTimeout(() => {
        nextQuestion();
      }, 1500);
    }
  };

  const saveQuizResult = (name: string, score: number, completed: boolean) => {
    const now = new Date();
    const elapsedSeconds = Math.floor((Date.now() - startTimeRef.current) / 1000);
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;
    const timeTaken = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    const playerRecord = {
      name,
      score,
      totalQuestions: QUIZ_QUESTIONS.length,
      timeTaken,
      date: now.toISOString().split('T')[0]
    };

    PlayerStorage.savePlayerResult(playerRecord);
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

  const navigateToStart = () => { window.location.href = '/'; };

  const currentQuestion = QUIZ_QUESTIONS[quizState.currentQuestionIndex];
  const isLastQuestion = quizState.currentQuestionIndex === QUIZ_QUESTIONS.length - 1;

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
    <div className="min-h-screen bg-gradient-to-br from-[#BFDCDE] via-[#E5F1F2] to-[#BFDCDE] p-4">
      {quizState.showWinnerAnimation && (
        <WinnerAnimation
          playerName={playerName}
          onBackToStart={navigateToStart}
        />
      )}

      <div className="max-w-4xl mx-auto">
        <QuizHeader
          playerName={playerName}
          currentQuestion={quizState.currentQuestionIndex + 1}
          totalQuestions={QUIZ_QUESTIONS.length}
          isLastQuestion={isLastQuestion}
        />

        <QuizTimer
          timeLeft={quizState.timeLeft}
          totalTime={TOTAL_TIME_PER_QUESTION}
        />

        <div className="backdrop-blur-xl bg-[#BFDCDE]/90 border border-[#007179]/40 rounded-2xl shadow-xl p-8 overflow-hidden group">
          <QuestionRenderer
            question={currentQuestion}
            onAnswer={handleAnswer}
            key={quizState.currentQuestionIndex}
          />
        </div>

        <div className="text-center mt-8">
          <div className="backdrop-blur-md bg-[#007179]/20 border border-[#007179]/30 inline-block px-6 py-2.5 rounded-full">
            <p className="text-sm font-medium text-[#00383C]">
              © Made by innovAIte
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;