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
    question: "Finde den Bug in diesem Raiffeisen Payment Service Code:",
    code: `function processPayment(amount, accountId) {
  if (amount > 0 && accountId != null) {
    return transferMoney(amount, accountId);
  }
  return false;
}`,
    correct: "Verwendung von != statt !== für null check",
    timeLimit: 60
  },
  // ... (alle anderen Fragen hier einfügen)
  {
    id: 10,
    type: "code",
    question: "🏆 GOATED QUESTION: Optimiere diese Raiffeisen Transaction Query für bessere Performance:",
    code: `SELECT * FROM transactions t 
JOIN accounts a ON t.account_id = a.id 
JOIN customers c ON a.customer_id = c.id 
WHERE t.amount > 1000 
AND t.created_at >= '2024-01-01'
ORDER BY t.created_at DESC;`,
    correct: "Index auf (amount, created_at), SELECT nur benötigte Spalten",
    timeLimit: 60
  }
];