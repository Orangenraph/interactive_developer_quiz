// src/data/questions/EasyQuestions.ts

import { McQuestion, TrueFalseQuestion, InputQuestions } from '../BaseQuestions';

export const EASY_QUESTIONS: (McQuestion | TrueFalseQuestion | InputQuestions)[] = [
  {
    id: 1,
    type: "mc",
    question: "Welche Programmiersprache wird hauptsächlich für Raiffeisen's Backend Services verwendet?",
    options: ["Java", "Python", "C#", "JavaScript"],
    correct: 0,
    timeLimit: 60,
    difficulty: "easy"
  },
  {
    id: 2,
    type: "mc",
    question: "Welches dieser Geräte ist ein Ausgabegerät?",
    options: ["Tastatur", "Monitor", "Maus", "Scanner"],
    correct: 1,
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 3,
    type: "truefalse",
    question: "Ein Byte besteht aus 16 Bits.",
    correct: false,
    timeLimit: 20,
    difficulty: "easy"
  },
  {
    id: 4,
    type: "truefalse",
    question: "CSS steht für Cascading Style Sheets.",
    correct: true,
    timeLimit: 20,
    difficulty: "easy"
  },
  {
    id: 5,
    type: "input",
    question: "Welches Kürzel steht für das bekannteste Hypertext-Protokoll im Web?",
    correct: "HTTP",
    timeLimit: 25,
    difficulty: "easy"
  }
];