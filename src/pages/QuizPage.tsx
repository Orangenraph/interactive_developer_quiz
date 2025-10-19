// src/pages/QuizPage.tsx

import React, { useState, useEffect, useRef } from 'react';
import { Trophy } from 'lucide-react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/questions';
import { QuestionRenderer } from '../components/questions/QuestionRenderer';
import { WinnerAnimation } from '../components/results/WinnerAnimation';
import ResultPage from './ResultPage';

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
    setIsTimerActive(false);

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
      setTimeout(() => {
        setQuizState(prev => ({
          ...prev,
          isComplete: true
        }));
      }, 1500);
      return;
    }

    if (quizState.currentQuestionIndex === questionSet.length - 1 && isCorrect) {
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

  const finishQuiz = () => { /* ... */ };
  const navigateToStart = () => { window.location.href = '/'; };
  const resetQuiz = () => { /* ... */ };

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
    <div className="min-h-screen bg-gradient-to-br from-[#BFDCDE] via-[#E5F1F2] to-[#BFDCDE] p-4">
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

        <QuizTimer
          timeLeft={quizState.timeLeft}
          totalTime={TOTAL_TIME_PER_QUESTION}
        />

        {/* Question Card */}
        <div className="backdrop-blur-xl bg-[#BFDCDE]/90 border border-[#007179]/40 rounded-2xl shadow-xl p-8 overflow-hidden group">

          <QuestionRenderer
            question={currentQuestion}
            onAnswer={handleAnswer}
            key={quizState.currentQuestionIndex}
          />
        </div>

        {/* Footer */}
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