// src/data/questions/HardQuestions.ts

import { McQuestion, TrueFalseQuestion, InputQuestions, CodeQuestions } from '../BaseQuestions';

export const HARD_QUESTIONS: (McQuestion | TrueFalseQuestion | InputQuestions | CodeQuestions)[] = [
  {
    id: 1,
    type: "mc",
    question: "Welches HTTP-Statuscode steht für 'Unauthorized'?",
    options: ["400", "401", "403", "404"],
    correct: 1,
    timeLimit: 40,
    difficulty: "hard"
  },
  {
    id: 2,
    type: "mc",
    question: "Welche Datenstruktur verwendet einen LIFO-Ansatz?",
    options: ["Queue", "Stack", "Tree", "Graph"],
    correct: 1,
    timeLimit: 35,
    difficulty: "hard"
  },
  {
    id: 3,
    type: "truefalse",
    question: "In JavaScript sind '0' == false und '0' === false beide true.",
    correct: false,
    timeLimit: 35,
    difficulty: "hard"
  },
  {
    id: 4,
    type: "truefalse",
    question: "Docker Container teilen sich den Kernel des Host-Betriebssystems.",
    correct: true,
    timeLimit: 40,
    difficulty: "hard"
  },
  {
    id: 5,
    type: "input",
    question: "Welches Design Pattern wird verwendet, um sicherzustellen, dass eine Klasse nur eine einzige Instanz hat?",
    correct: "Singleton",
    timeLimit: 45,
    difficulty: "hard"
  },
  {
    id: 6,
    type: "code",
    question: "Was gibt dieser Code aus?",
    code: `const arr = [1, 2, 3];
arr[10] = 99;
console.log(arr.length);`,
    correct: "11",
    timeLimit: 50,
    difficulty: "hard"
  }
];