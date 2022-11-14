import { useState } from "react";
import { Button } from "../../components/Button";
import { H1, H2 } from "../../components/Header";
import { Paragraph } from "../../components/Paragraph";
import { QuizzButton } from "../../components/Quizz/Button";
import { QuizzCounter } from "../../components/Quizz/Counter";

const questions = [
  {
    id: 1,
    question: "PRIMEIRA",
    explanation: "This is the explanation",
    answers: [
      { id: 1, text: "Bla", correct: false },
      { id: 2, text: "Bla2", correct: false },
      { id: 3, text: "Bla3", correct: false },
      { id: 4, text: "Bla4", correct: true },
    ],
  },
  {
    id: 2,
    question: "SEGUNDA",
    explanation: "This is another explanation",
    answers: [
      { id: 1, text: "FSDF", correct: false },
      { id: 2, text: "REWRWE", correct: false },
      { id: 3, text: "65465", correct: false },
      { id: 4, text: "645645", correct: true },
    ],
  },
  {
    id: 2,
    question: "SEGUNDA",
    explanation: "This is another explanation",
    answers: [
      { id: 1, text: "FSDF", correct: false },
      { id: 2, text: "REWRWE", correct: false },
      { id: 3, text: "65465", correct: false },
      { id: 4, text: "645645", correct: true },
    ],
  },
  {
    id: 2,
    question: "SEGUNDA",
    explanation: "This is another explanation",
    answers: [
      { id: 1, text: "FSDF", correct: false },
      { id: 2, text: "REWRWE", correct: false },
      { id: 3, text: "65465", correct: false },
      { id: 4, text: "645645", correct: true },
    ],
  },
  {
    id: 2,
    question: "SEGUNDA",
    explanation: "This is another explanation",
    answers: [
      { id: 1, text: "FSDF", correct: false },
      { id: 2, text: "REWRWE", correct: false },
      { id: 3, text: "65465", correct: false },
      { id: 4, text: "645645", correct: true },
    ],
  },
];

export function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean>();

  const nextPage = () => setCurrentIndex(currentIndex + 1);
  const previousPage = () => setCurrentIndex(currentIndex - 1);
  const onClick = (correct: boolean) => {
    const explanation = questions[currentIndex].explanation;
    if (correct) {
      setIsCorrect(true);
      return setAnswer(explanation);
    }
    setIsCorrect(false);
    return setAnswer(explanation);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <QuizzCounter current={currentIndex + 1} total={questions.length} />
      <H2>{questions[currentIndex].question}</H2>
      <div className="w-full grid gap-2 my-4 justify-items-center">
        {questions[currentIndex].answers.map((x) => {
          return (
            <QuizzButton key={x.id} onClick={() => onClick(x.correct)}>
              {x.text}
            </QuizzButton>
          );
        })}
      </div>
      <div className="flex gap-2">
        <Button previous onClick={previousPage} disabled={currentIndex === 0}>
          {"<"} Anterior
        </Button>
        <Button
          next
          onClick={nextPage}
          disabled={currentIndex + 1 >= questions.length}
        >
          Próximo {">"}{" "}
        </Button>
      </div>
      {answer && (
        <Paragraph correct={isCorrect}>
          {questions[currentIndex].explanation}
        </Paragraph>
      )}
    </div>
  );
}
