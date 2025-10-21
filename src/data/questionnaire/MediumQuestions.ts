// src/data/questions/MediumQuestions.ts

import { McQuestion, TrueFalseQuestion, InputQuestions, CodeQuestions } from '../BaseQuestions';

export const MEDIUM_QUESTIONS: (McQuestion | TrueFalseQuestion | InputQuestions | CodeQuestions)[] = [
  {
    id: 1,
    type: "mc",
    question: "Was ist die Zeitkomplexität einer binären Suche in einem sortierten Array?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    correct: 1,
    timeLimit: 45,
    difficulty: "medium"
  },
  {
    id: 2,
    type: "mc",
    question: "Welche dieser Speicherarten verliert ihre Daten, wenn der Computer ausgeschaltet wird?",
    options: ["Festplatte", "RAM", "SSD", "USB-Stick"],
    correct: 1,
    timeLimit: 45,
    difficulty: "medium"
  },
  {
    id: 3,
    type: "truefalse",
    question: "HTTPS in einer Web-Adresse bedeutet, dass die Verbindung zwischen deinem Browser und der Webseite verschlüsselt und sicher ist.",
    correct: true,
    timeLimit: 30,
    difficulty: "medium"
  },
  {
    id: 4,
    type: "truefalse",
    question: "In REST APIs steht POST immer für das Lesen von Daten.",
    correct: false,
    timeLimit: 30,
    difficulty: "medium"
  },
  {
    id: 5,
    type: "input",
    question: "Wie heißt das weltweit populärste System zur Versionskontrolle von Code, das von Linus Torvalds entwickelt wurde?",
    correct: "Git",
    timeLimit: 30,
    difficulty: "medium"
  },
  {
    id: 6,
    type: "code",
    question: "Was gibt dieser Code aus?",
    code: `console.log(typeof null);`,
    correct: "object",
    timeLimit: 45,
    difficulty: "medium"
  }
];