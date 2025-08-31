// src/components/questions/QuestionRenderer.tsx
import React from 'react';
import { QuizQuestion } from '../../data/questions';
import { MultipleChoiceQuestion } from './MultipleChoiceQuestion';
import { CodeQuestion } from './CodeQuestion';
import { TrueFalseQuestion } from './TrueFalseQuestion';
import { InputQuestion } from './InputQuestion';

interface QuestionRendererProps {
  question: QuizQuestion;
  onAnswer: (answer: any) => void;
}

export const QuestionRenderer = ({ question, onAnswer }: QuestionRendererProps) => {
  switch (question.type) {
    case 'mc':
      return <MultipleChoiceQuestion question={question} onAnswer={onAnswer} />;
    case 'code':
      return <CodeQuestion question={question} onAnswer={onAnswer} />;
    case 'truefalse':
      return <TrueFalseQuestion question={question} onAnswer={onAnswer} />;
    case 'input':
      return <InputQuestion question={question} onAnswer={onAnswer} />;
    default:
      return <div>Unbekannter Fragetyp</div>;
  }
};