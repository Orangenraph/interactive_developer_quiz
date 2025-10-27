// src/data/questions/BaseQuestions.ts

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