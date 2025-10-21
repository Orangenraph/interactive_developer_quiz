// src/pages/QuizPage.tsx

import React, { useState, useEffect, useRef } from 'react';
import { Trophy } from 'lucide-react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/questions';
import { QuestionRenderer } from '../components/questions/QuestionRenderer';
import { WinnerAnimation } from '../components/results/WinnerAnimation';
import ResultPage from './ResultPage';
import { PlayerStorage } from '../services/PlayerStorage';
import QuizHeader from '../components/quiz/QuizHeader';
import BackButton from '../components/leaderboard/BackButton';

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
  const [isAnswering, setIsAnswering] = useState(false);

  // NEW: the chosen 10 questions for this run (3 easy, 3 medium, 3 hard, 1 goated)
  const [questionSet, setQuestionSet] = useState<QuizQuestion[]>([]);

  // Pick questions at game start with required difficulty order
  useEffect(() => {
    const selected = buildQuestionSet(QUIZ_QUESTIONS);
    setQuestionSet(selected);
  }, []);

  // Helper: build the 10-question set with fixed order by difficulty
  const buildQuestionSet = (pool: QuizQuestion[]): QuizQuestion[] => {
    const byDiff = {
      easy: pool.filter(q => q.difficulty === 'easy'),
      medium: pool.filter(q => q.difficulty === 'medium'),
      hard: pool.filter(q => q.difficulty === 'hard'),
      goated: pool.filter(q => q.difficulty === 'goated'),
    };

    const pick = <T,>(arr: T[], n: number): T[] => {
      const copy = [...arr];
      shuffleInPlace(copy);
      return copy.slice(0, Math.min(n, copy.length));
    };

    const need = { easy: 3, medium: 3, hard: 3, goated: 1 };

    const chosenEasy = pick(byDiff.easy, need.easy);
    const chosenMedium = pick(byDiff.medium, need.medium);
    const chosenHard = pick(byDiff.hard, need.hard);
    const chosenGoated = pick(byDiff.goated, need.goated);

    let set = [...chosenEasy, ...chosenMedium, ...chosenHard, ...chosenGoated];

    // Fallback: top up if the pool is short (keeps the order segments intact)
    if (set.length < 10) {
      const already = new Set(set.map(q => q));
      const remaining = pool.filter(q => !already.has(q));
      shuffleInPlace(remaining);
      set = [...set, ...remaining.slice(0, 10 - set.length)];
    }

    return set.slice(0, 10);
  };

  const shuffleInPlace = <T,>(arr: T[]): void => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

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
    if (isAnswering) return;
    setIsTimerActive(false);
    setIsAnswering(true);

    // USE questionSet instead of whole pool
    const currentQuestion = questionSet[quizState.currentQuestionIndex];
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


    if (quizState.currentQuestionIndex === questionSet.length - 1 && isCorrect) {

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
        setIsAnswering(false);
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

  // Guard until the question set is ready
  if (questionSet.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#00383C]">
        Loading questions...
      </div>
    );
  }

  const currentQuestion = questionSet[quizState.currentQuestionIndex];
  const isLastQuestion = quizState.currentQuestionIndex === questionSet.length - 1;

  if (quizState.isComplete && !quizState.showWinnerAnimation) {
    return (
      <ResultPage
        playerName={playerName}
        score={quizState.score}
        totalQuestions={questionSet.length}
        onBackToStart={navigateToStart}
        lastQuestionCorrect={quizState.lastQuestionCorrect}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {quizState.showWinnerAnimation && (
        <WinnerAnimation
          playerName={playerName}
          onBackToStart={navigateToStart}
        />
      )}

      <div className="max-w-4xl mx-auto">
        {/* QuizHeader mit isLastQuestion und ProgressBar */}
        <QuizHeader
          playerName={playerName}
          currentQuestion={quizState.currentQuestionIndex + 1}
          totalQuestions={questionSet.length}
          isLastQuestion={isLastQuestion}
        />
      </div>
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        {/* Score and Time Info */}
        <div className="mb-8 flex justify-center gap-8 flex-wrap">
          <div className="bg-white border-2 border-[#007179] rounded-lg px-6 py-3 text-center">
            <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold mb-1">Punkte</p>
            <p className="text-2xl font-bold text-[#007179]">{quizState.score}</p>
          </div>
          <div className="bg-white border-2 border-[#007179] rounded-lg px-6 py-3 text-center">
            <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold mb-1">Zeit verbleibend</p>
            <p className="text-2xl font-bold text-[#007179]">{quizState.timeLeft}s</p>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white border-2 border-[#007179] rounded-2xl shadow-lg p-8 mb-8">
          <QuestionRenderer
            question={currentQuestion}
            onAnswer={handleAnswer}
            key={quizState.currentQuestionIndex}
          />
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="inline-block px-6 py-2.5 rounded-full" style={{
            backgroundColor: '#00717922'
          }}>
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