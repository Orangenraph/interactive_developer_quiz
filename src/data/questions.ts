// src/data/questions.ts

export type QuestionType = "mc" | "code" | "truefalse" | "input";

export interface BaseQuestion {
  id: number;
  type: QuestionType;
  question: string;
  timeLimit: number;
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
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    type: "mc",
    question: "Welche Programmiersprache wird hauptsächlich für Raiffeisen's Backend Services verwendet?",
    options: ["Java", "Python", "C#", "JavaScript"],
    correct: 0,
    timeLimit: 60
  },
  {
     id: 2,
    type: "code",
    question: "Was fehlt? Finde den Syntaxfehler in diesem JavaScript-Code:",
    code: `function getGreeting(name) {
      // Ein wichtiges Zeichen fehlt am Ende!
      if (name) {
        return "Hallo, " + name;
      
    }`,
    correct: "}", // Die erwartete Antwort ist das fehlende Zeichen
    timeLimit: 60
  },
 {
    id: 3,
    type: "truefalse",
    question: "HTTPS in einer Web-Adresse bedeutet, dass die Verbindung zwischen deinem Browser und der Webseite verschlüsselt und sicher ist.",
    correct: true,
    timeLimit: 30
  },
  {
    id: 4,
    type: "input",
    question: "Wie heißt das weltweit populärste System zur Versionskontrolle von Code, das von Linus Torvalds entwickelt wurde?",
    correct: "Git",
    timeLimit: 30
  },

  {
    id: 10,
    type: "code",
    question: "🏆 GOATED QUESTION: Vervollständige die SQL-Abfrage, um die Namen (`name`) ALLER Kunden aus der Tabelle `customers` auszuwählen.",
    code: `SELECT ______ FROM customers;`,
    correct: "name", // Einfache Vervollständigung
    timeLimit: 60
  }
];