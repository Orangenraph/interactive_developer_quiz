// src/data/questions.ts

export type QuestionType = "mc" | "code" | "truefalse" | "input";
export type DifficultyLevel = "easy" | "medium" | "hard" | "goated";

export interface BaseQuestion {
  id: number;
  type: QuestionType;
  question: string;
  timeLimit: number;
  difficulty: DifficultyLevel;
}

export interface McQuestion extends BaseQuestion {
  type: "mc";
  options: string[];
  correct: number;
}

export interface CodeQuestions extends BaseQuestion {
  type: "code";
  code: string;
  correct: string;
}

export interface TrueFalseQuestion extends BaseQuestion {
  type: "truefalse";
  correct: boolean;
}

export interface InputQuestions extends BaseQuestion {
  type: "input";
  correct: string;
}

export type QuizQuestion = McQuestion | CodeQuestions | TrueFalseQuestion | InputQuestions;


// Jetzt die eigentlichen Daten
// Jetzt die eigentlichen Daten
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // EASY (2 MC, 2 TF, 1 Input, 0 Code)
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
  },

  // MEDIUM (2 MC, 2 TF, 1 Input, 1 Code)
  {
    id: 6,
    type: "mc",
    question: "Was ist die Zeitkomplexität einer binären Suche in einem sortierten Array?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    correct: 1,
    timeLimit: 45,
    difficulty: "medium"
  },
  {
    id: 7,
    type: "mc",
    question: "Welche dieser Speicherarten verliert ihre Daten, wenn der Computer ausgeschaltet wird?",
    options: ["Festplatte", "RAM", "SSD", "USB-Stick"],
    correct: 1,
    timeLimit: 45,
    difficulty: "medium"
  },
  {
    id: 8,
    type: "truefalse",
    question: "HTTPS in einer Web-Adresse bedeutet, dass die Verbindung zwischen deinem Browser und der Webseite verschlüsselt und sicher ist.",
    correct: true,
    timeLimit: 30,
    difficulty: "medium"
  },
  {
    id: 9,
    type: "truefalse",
    question: "In REST APIs steht POST immer für das Lesen von Daten.",
    correct: false,
    timeLimit: 30,
    difficulty: "medium"
  },
  {
    id: 10,
    type: "input",
    question: "Wie heißt das weltweit populärste System zur Versionskontrolle von Code, das von Linus Torvalds entwickelt wurde?",
    correct: "Git",
    timeLimit: 30,
    difficulty: "medium"
  },
  {
    id: 11,
    type: "code",
    question: "Was gibt dieser Code aus?",
    code: `console.log(typeof null);`,
    correct: "object",
    timeLimit: 45,
    difficulty: "medium"
  },

  // HARD (2 MC, 2 TF, 1 Input, 1 Code)
  {
    id: 12,
    type: "mc",
    question: "Welches HTTP-Statuscode steht für 'Unauthorized'?",
    options: ["400", "401", "403", "404"],
    correct: 1,
    timeLimit: 40,
    difficulty: "hard"
  },
  {
    id: 13,
    type: "mc",
    question: "Welche Datenstruktur verwendet einen LIFO-Ansatz?",
    options: ["Queue", "Stack", "Tree", "Graph"],
    correct: 1,
    timeLimit: 35,
    difficulty: "hard"
  },
  {
    id: 14,
    type: "truefalse",
    question: "In JavaScript sind '0' == false und '0' === false beide true.",
    correct: false,
    timeLimit: 35,
    difficulty: "hard"
  },
  {
    id: 15,
    type: "truefalse",
    question: "Docker Container teilen sich den Kernel des Host-Betriebssystems.",
    correct: true,
    timeLimit: 40,
    difficulty: "hard"
  },
  {
    id: 16,
    type: "input",
    question: "Welches Design Pattern wird verwendet, um sicherzustellen, dass eine Klasse nur eine einzige Instanz hat?",
    correct: "Singleton",
    timeLimit: 45,
    difficulty: "hard"
  },
  {
    id: 17,
    type: "code",
    question: "Was gibt dieser Code aus?",
    code: `const arr = [1, 2, 3];
arr[10] = 99;
console.log(arr.length);`,
    correct: "11",
    timeLimit: 50,
    difficulty: "hard"
  },

  // GOATED (2 MC, 2 TF, 1 Input, 1 Code)
  {
    id: 18,
    type: "mc",
    question: "Was ist das Ergebnis von: 0.1 + 0.2 === 0.3 in JavaScript?",
    options: ["true", "false", "undefined", "NaN"],
    correct: 1,
    timeLimit: 40,
    difficulty: "goated"
  },
  {
    id: 19,
    type: "mc",
    question: "Welcher Port ist standardmäßig für PostgreSQL reserviert?",
    options: ["3306", "5432", "27017", "6379"],
    correct: 1,
    timeLimit: 40,
    difficulty: "goated"
  },
  {
    id: 20,
    type: "truefalse",
    question: "In TCP ist der 3-Way-Handshake: SYN → SYN-ACK → ACK.",
    correct: true,
    timeLimit: 40,
    difficulty: "goated"
  },
  {
    id: 21,
    type: "truefalse",
    question: "Ein Deadlock kann nur auftreten, wenn alle vier Coffman-Bedingungen erfüllt sind.",
    correct: true,
    timeLimit: 45,
    difficulty: "goated"
  },
  {
    id: 22,
    type: "input",
    question: "Wie heißt der Algorithmus, der die kürzesten Pfade in einem gewichteten Graphen berechnet?",
    correct: "Dijkstra",
    timeLimit: 50,
    difficulty: "goated"
  },
  {
    id: 23,
    type: "code",
    question: "Was gibt dieser Code in der Konsole aus?",
    code: `console.log(+'');`,
    correct: "0",
    timeLimit: 35,
    difficulty: "goated"
  }
];