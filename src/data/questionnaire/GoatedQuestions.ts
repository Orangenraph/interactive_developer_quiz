// src/data/questions/GoatedQuestions.ts

import { McQuestion, TrueFalseQuestion, InputQuestions, CodeQuestions } from '../BaseQuestions';

export const GOATED_QUESTIONS: (McQuestion | TrueFalseQuestion | InputQuestions | CodeQuestions)[] = [
  {
    id: 1,
    type: "mc",
    question: "Was ist das Ergebnis von: 0.1 + 0.2 === 0.3 in JavaScript?",
    options: ["true", "false", "undefined", "NaN"],
    correct: 1,
    timeLimit: 40,
    difficulty: "goated"
  },
  {
    id: 2,
    type: "mc",
    question: "Welcher Port ist standardmäßig für PostgreSQL reserviert?",
    options: ["3306", "5432", "27017", "6379"],
    correct: 1,
    timeLimit: 40,
    difficulty: "goated"
  },
  {
    id: 3,
    type: "truefalse",
    question: "In TCP ist der 3-Way-Handshake: SYN → SYN-ACK → ACK.",
    correct: true,
    timeLimit: 40,
    difficulty: "goated"
  },
  {
    id: 4,
    type: "truefalse",
    question: "Ein Deadlock kann nur auftreten, wenn alle vier Coffman-Bedingungen erfüllt sind.",
    correct: true,
    timeLimit: 45,
    difficulty: "goated"
  },
  {
    id: 5,
    type: "input",
    question: "Wie heißt der Algorithmus, der die kürzesten Pfade in einem gewichteten Graphen berechnet?",
    correct: "Dijkstra",
    timeLimit: 50,
    difficulty: "goated"
  },
  {
    id: 6,
    type: "code",
    question: "Was gibt dieser Code in der Konsole aus?",
    code: `console.log(+'');`,
    correct: "0",
    timeLimit: 35,
    difficulty: "goated"
  }
];