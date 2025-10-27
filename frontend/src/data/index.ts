// src/data/questions/index.ts

export * from './BaseQuestions';
export { EASY_QUESTIONS } from './questionnaire/EasyQuestions';
export { MEDIUM_QUESTIONS } from './questionnaire/MediumQuestions';
export { HARD_QUESTIONS } from './questionnaire/HardQuestions';
export { GOATED_QUESTIONS } from './questionnaire/GoatedQuestions';

import { EASY_QUESTIONS } from './questionnaire/EasyQuestions';
import { MEDIUM_QUESTIONS } from './questionnaire/MediumQuestions';
import { HARD_QUESTIONS } from './questionnaire/HardQuestions';
import { GOATED_QUESTIONS } from './questionnaire/GoatedQuestions';
import type { QuizQuestion } from './BaseQuestions';

// Alle Fragen zusammengefasst für das Quiz
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  ...EASY_QUESTIONS,
  ...MEDIUM_QUESTIONS,
  ...HARD_QUESTIONS,
  ...GOATED_QUESTIONS
];